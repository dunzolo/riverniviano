export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cache: {
        Row: {
          expiration: number
          key: string
          value: string
        }
        Insert: {
          expiration: number
          key: string
          value: string
        }
        Update: {
          expiration?: number
          key?: string
          value?: string
        }
        Relationships: []
      }
      cache_locks: {
        Row: {
          expiration: number
          key: string
          owner: string
        }
        Insert: {
          expiration: number
          key: string
          owner: string
        }
        Update: {
          expiration?: number
          key?: string
          owner?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string | null
          id: number
          name: string
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      failed_jobs: {
        Row: {
          connection: string
          exception: string
          failed_at: string
          id: number
          payload: string
          queue: string
          uuid: string
        }
        Insert: {
          connection: string
          exception: string
          failed_at?: string
          id?: number
          payload: string
          queue: string
          uuid: string
        }
        Update: {
          connection?: string
          exception?: string
          failed_at?: string
          id?: number
          payload?: string
          queue?: string
          uuid?: string
        }
        Relationships: []
      }
      group_teams: {
        Row: {
          created_at: string | null
          goal_conceded: number
          goal_difference: number
          goal_scored: number
          group_id: number
          id: number
          points: number
          ranking: number | null
          team_id: number | null
          team_placeholder: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          goal_conceded?: number
          goal_difference?: number
          goal_scored?: number
          group_id: number
          id?: number
          points?: number
          ranking?: number | null
          team_id?: number | null
          team_placeholder?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          goal_conceded?: number
          goal_difference?: number
          goal_scored?: number
          group_id?: number
          id?: number
          points?: number
          ranking?: number | null
          team_id?: number | null
          team_placeholder?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "group_teams_group_id_foreign"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_teams_team_id_foreign"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          category_id: number
          created_at: string | null
          id: number
          name: string
          round_type: string
          tournament_id: number
          updated_at: string | null
        }
        Insert: {
          category_id: number
          created_at?: string | null
          id?: number
          name: string
          round_type: string
          tournament_id: number
          updated_at?: string | null
        }
        Update: {
          category_id?: number
          created_at?: string | null
          id?: number
          name?: string
          round_type?: string
          tournament_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_category_id_foreign"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_tournament_id_foreign"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      job_batches: {
        Row: {
          cancelled_at: number | null
          created_at: number
          failed_job_ids: string
          failed_jobs: number
          finished_at: number | null
          id: string
          name: string
          options: string | null
          pending_jobs: number
          total_jobs: number
        }
        Insert: {
          cancelled_at?: number | null
          created_at: number
          failed_job_ids: string
          failed_jobs: number
          finished_at?: number | null
          id: string
          name: string
          options?: string | null
          pending_jobs: number
          total_jobs: number
        }
        Update: {
          cancelled_at?: number | null
          created_at?: number
          failed_job_ids?: string
          failed_jobs?: number
          finished_at?: number | null
          id?: string
          name?: string
          options?: string | null
          pending_jobs?: number
          total_jobs?: number
        }
        Relationships: []
      }
      jobs: {
        Row: {
          attempts: number
          available_at: number
          created_at: number
          id: number
          payload: string
          queue: string
          reserved_at: number | null
        }
        Insert: {
          attempts: number
          available_at: number
          created_at: number
          id?: number
          payload: string
          queue: string
          reserved_at?: number | null
        }
        Update: {
          attempts?: number
          available_at?: number
          created_at?: number
          id?: number
          payload?: string
          queue?: string
          reserved_at?: number | null
        }
        Relationships: []
      }
      matches: {
        Row: {
          away_score: number | null
          away_team_id: number | null
          away_team_placeholder: string | null
          category_id: number
          created_at: string | null
          day: string
          field: string | null
          group_id: number | null
          home_score: number | null
          home_team_id: number | null
          home_team_placeholder: string | null
          id: number
          match_type: string
          result_placeholder: string | null
          time: string
          time_placeholder: string | null
          tournament_id: number
          updated_at: string | null
        }
        Insert: {
          away_score?: number | null
          away_team_id?: number | null
          away_team_placeholder?: string | null
          category_id: number
          created_at?: string | null
          day: string
          field?: string | null
          group_id?: number | null
          home_score?: number | null
          home_team_id?: number | null
          home_team_placeholder?: string | null
          id?: number
          match_type: string
          result_placeholder?: string | null
          time: string
          time_placeholder?: string | null
          tournament_id: number
          updated_at?: string | null
        }
        Update: {
          away_score?: number | null
          away_team_id?: number | null
          away_team_placeholder?: string | null
          category_id?: number
          created_at?: string | null
          day?: string
          field?: string | null
          group_id?: number | null
          home_score?: number | null
          home_team_id?: number | null
          home_team_placeholder?: string | null
          id?: number
          match_type?: string
          result_placeholder?: string | null
          time?: string
          time_placeholder?: string | null
          tournament_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_away_team_id_foreign"
            columns: ["away_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_category_id_foreign"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_group_id_foreign"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_home_team_id_foreign"
            columns: ["home_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_tournament_id_foreign"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      migrations: {
        Row: {
          batch: number
          id: number
          migration: string
        }
        Insert: {
          batch: number
          id?: number
          migration: string
        }
        Update: {
          batch?: number
          id?: number
          migration?: string
        }
        Relationships: []
      }
      password_reset_tokens: {
        Row: {
          created_at: string | null
          email: string
          token: string
        }
        Insert: {
          created_at?: string | null
          email: string
          token: string
        }
        Update: {
          created_at?: string | null
          email?: string
          token?: string
        }
        Relationships: []
      }
      personal_access_tokens: {
        Row: {
          abilities: string | null
          created_at: string | null
          expires_at: string | null
          id: number
          last_used_at: string | null
          name: string
          token: string
          tokenable_id: number
          tokenable_type: string
          updated_at: string | null
        }
        Insert: {
          abilities?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: number
          last_used_at?: string | null
          name: string
          token: string
          tokenable_id: number
          tokenable_type: string
          updated_at?: string | null
        }
        Update: {
          abilities?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: number
          last_used_at?: string | null
          name?: string
          token?: string
          tokenable_id?: number
          tokenable_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sessions: {
        Row: {
          id: string
          ip_address: string | null
          last_activity: number
          payload: string
          user_agent: string | null
          user_id: number | null
        }
        Insert: {
          id: string
          ip_address?: string | null
          last_activity: number
          payload: string
          user_agent?: string | null
          user_id?: number | null
        }
        Update: {
          id?: string
          ip_address?: string | null
          last_activity?: number
          payload?: string
          user_agent?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          category_id: number
          created_at: string | null
          excluded: boolean
          id: number
          logo: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          category_id: number
          created_at?: string | null
          excluded?: boolean
          id?: number
          logo?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          category_id?: number
          created_at?: string | null
          excluded?: boolean
          id?: number
          logo?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_category_id_foreign"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      tournament_category: {
        Row: {
          category_id: number
          created_at: string | null
          id: number
          rules: string | null
          tournament_id: number
          updated_at: string | null
        }
        Insert: {
          category_id: number
          created_at?: string | null
          id?: number
          rules?: string | null
          tournament_id: number
          updated_at?: string | null
        }
        Update: {
          category_id?: number
          created_at?: string | null
          id?: number
          rules?: string | null
          tournament_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tournament_category_category_id_foreign"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournament_category_tournament_id_foreign"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      tournaments: {
        Row: {
          background_image: string | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: number
          logo: string | null
          name: string
          slug: string
          start_date: string | null
          teams_per_group: number | null
          type: string | null
          updated_at: string | null
          year: number
        }
        Insert: {
          background_image?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: number
          logo?: string | null
          name: string
          slug: string
          start_date?: string | null
          teams_per_group?: number | null
          type?: string | null
          updated_at?: string | null
          year: number
        }
        Update: {
          background_image?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: number
          logo?: string | null
          name?: string
          slug?: string
          start_date?: string | null
          teams_per_group?: number | null
          type?: string | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          email_verified_at: string | null
          id: number
          name: string
          password: string
          remember_token: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          email_verified_at?: string | null
          id?: number
          name: string
          password: string
          remember_token?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          email_verified_at?: string | null
          id?: number
          name?: string
          password?: string
          remember_token?: string | null
          updated_at?: string | null
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
