import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function GET() {
  try {
    // Verificar que las variables de entorno estén configuradas
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Variables de entorno de Supabase no configuradas")
      return NextResponse.json({ 
        status: "error", 
        message: "Variables de entorno de Supabase no configuradas"
      }, { status: 500 })
    }

    // Hacer una consulta mínima a la base de datos para mantener activo el proyecto
    const { data, error } = await supabase
      .from("properties")
      .select("id")
      .limit(1)

    if (error) {
      console.error("Error en keep-alive:", error)
      return NextResponse.json({ 
        status: "error", 
        message: "Error al consultar la base de datos",
        error: error.message 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      status: "ok", 
      message: "Keep-alive exitoso",
      timestamp: new Date().toISOString(),
      dataFound: data ? data.length : 0
    })
  } catch (error) {
    console.error("Error inesperado en keep-alive:", error)
    return NextResponse.json({ 
      status: "error", 
      message: "Error inesperado",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Error desconocido"
    }, { status: 500 })
  }
}
