export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      items: {
        Row: {
          created_at: string
          dimensions: number[] | null
          id: number
          images: string[] | null
          mainImage: string | null
          name: string
          section: string
          year: number
        }
        Insert: {
          created_at?: string
          dimensions?: number[] | null
          id?: number
          images?: string[] | null
          mainImage?: string | null
          name: string
          section: string
          year: number
        }
        Update: {
          created_at?: string
          dimensions?: number[] | null
          id?: number
          images?: string[] | null
          mainImage?: string | null
          name?: string
          section?: string
          year?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
