export type Json =
  | string 
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
    _InternalSupabase: {
        PostgrestVersion: "14.5"
    }
    public: {
        Tables: {
            admin_audit_log: {
                Row: {
                    actor_id: string | null
                    created_at: string
                    details: Json
                    event_type: string
                    id: string
                    subject: string | null
                }
                Insert: {
                    actor_id?: string | null
                    created_at?: string
                    details?: Json
                    event_type: string
                    id?: string
                    subject?: string | null
                }
                Update: {
                    actor_id?: string | null
                    created_at?: string
                    details?: Json
                    event_type?: string
                    id?: string
                    subject?: string | null
                }
                Relationships: []
            }
            app_congig: {
                Row: {
                    key: string
                    value: string
                }
                Insert: {
                    key: string
                    value: string
                }
                Update: {
                    key?: string
                    value?: string
                }
                Relationships: []
            }
            challenge_attemps: {
                Row: {
                    answer: string
                    challenge_id: string
                    created_at: string
                    id: string
                    is_correct: boolean
                    user_id: string
                }
                Insert: {
                    answer: string
                    challenge_id: string
                    created_at?: string
                    id?: string
                    is_correct?: boolean
                    user_id: string
                }
                Update: {
                    answer?: string
                    challenge_id?: string
                    created_at?: string
                    id?: string
                    is_correct?: boolean
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "challenge_attemps_challenge_id_fkey"
                        columns: ["challenge_id"]
                        isOneToOne: false
                        referencedRelation: "challenges"
                        referencedColumns: ["id"]
                    },
                ]
            }
            challenge_solutions: {
                Row: {
                    answer_pattern: string
                    challenge_id: string
                    explanation: string
                }
                Insert: {
                    answer_pattern: string
                    challenge_id: string
                    explanation: string
                }
                Update: {
                    answer_pattern?: string
                    challenge_id?: string
                    explanation?: string
                }
                Relationships: [
                    {
                        foreginKeyName: "challenge_solutions_challenge_id_fkey"
                        columns: ["challenge_id"]
                        isOneToOne: false
                        referencedRelation: "challenges"
                        referencedColumns: ["id"]
                    },
                ]
            }
            challenge_templates: {
                Row: {
                    answer_pattern: string
                    broken_code: string
                    created_at: string
                    difficulty: string
                    explanation: string
                    hint: string | null
                    id: string
                    language: string
                    last_used_on: string | null
                    prompt: string
                    title: string
                    xp_reward: number
                }
                Insert: {
                    answer_pattern: string
                    broken_code: string
                    created_at?: string
                    difficulty: string
                    explanation: string
                    hint?: string | null
                    id?: string
                    langauge: string
                    last_used_on?: string | null
                    prompt: string
                    title: string
                    xp_reward?: number
                }
                Update: {
                    answer_pattern?: string
                    broken_code?: string
                    created_at?: string
                    difficulty?: string
                    explanation?: string
                    hint?: string
                    id?: string
                    langauge?: string
                    last_used_on?: string | null
                    prompt?: string
                    title?: string
                    xp_reward?: number
                }
                Relationships: []
            }
            challenges: {
                Row: {
                    broken_code: string
                    challenge_date: string
                    created_at: string
                    difficulty: string
                    hint: string
                    id: string
                    language: string
                    prompt: string
                    title: string
                    xp_reward: number
                    source: "ai" | "template"
                }
                Insert: {
                    broken_code: string
                    challenge_date: string
                    created_at?: string
                    difficulty?: string
                    hint?: string
                    id?: string
                    language: string
                    prompt: string
                    title: string
                    xp_reward?: number
                    source?: "ai" | "template"
                } 
                Update: {
                    broken_code?: string
                    challenge_date?: string
                    created_at?: string
                    difficulty?: string
                    hint?: string
                    id?: string
                    language?: string
                    prompt?: string
                    title?: string
                    xp_reward?: number
                }
                Relationships: []
            }
            comment_votes: {
                Row: {
                    comment_id : string
                    created_at?: string
                    id?: string
                    user_id: string
                }
                Insert: {
                    comment_id: string
                    created_at?: string
                    id?: string
                    user_id: string
                }
                Update: {
                    comment_id?: string
                    created_at?: string
                    id?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "comment_votes_comment_id_fkey"
                        columns: ["comment_id"]
                        isOneToOne: false
                        referencedRelation: "review_comments"
                        referencedColumns: ["id"]
                    },
                ]
            }
            notes: {
                Row: {
                    client_updated_at: string
                    content: string
                    created_at: string
                    id: string
                    is_deleted: boolean
                    local_id: string
                    tags: string[]
                    title: string
                    updated_at: string
                    user_id: string
                }
                Insert: {
                    client_updated_at?: string
                    content: string
                    created_at?: string
                    id?: string
                    is_deleted?: boolean
                    local_id: string
                    tags?: string[]
                    title?: string
                    updated_at?: string
                    user_id: string
                }
                Update: {
                    client_updated_at?: string
                    content?: string
                    created_at?: string
                    id?: string
                    is_deleted?: boolean
                    local_id?: string
                    tags?: string[]
                    title?: string
                    updated_at?: string
                    user_id?: string
                }
                Relationships: []
            }
            notification_recipients: {
                Row: {
                    created_at: string
                    email: string
                    enabled: boolean
                    id: string
                }
                Insert: {
                    created_at?: string
                    email: string
                    enabled?: boolean
                    id?: string
                }
                Update: {
                    created_at?: string
                    email?: string
                    enabled?: boolean
                    id?: string
                }
                Relationships: []
            }
            profiles: {
                Row: {
                    avatar_url: string | null
                    bio: string | null
                    created_at: string
                    display_name: string | null
                    github_username: string | null
                    id: string
                    is_public: boolean
                    onboarded: boolean
                    role: string
                    skill_level: string
                    tagline: string | null
                    tech_stack: string[]
                    updated_at: string
                    user_id: string
                    username: string
                    website: string | null
                    xp: number
                }
                Insert: {
                    avatar_url?: string | null
                    bio?: string | null
                    created_at?: string
                    display_name?: string | null
                    github_username?: string | null
                    id?: string
                    is_public?: boolean
                    onboarded?: boolean
                    role?: string
                    skill_level?: string
                    taglie?: string | null
                    tech_stack?: string[]
                    updated_at?: string
                    user_id: string
                    username: string
                    website?: string | null
                    xp?: number
                }
                Update: {
                    avatar_url?: string | null
                    bio?: string | null
                    created_at?: string
                    display_name?: string | null
                    github_username?: string | null
                    id?: string 
                    is_public?: boolean
                    onboarded?: boolean
                    role?: string
                    skill_level?: string
                    tagline?: string | null
                    tech_stack?: string[]
                    updated_at?: string
                    user_id?: string
                    username?: string
                    website?: string | null
                    xp?: number
                }
                Relationships: []
            }
        }
    }
}