
import { createClient } from "@supabase/supabase-js";

const projectURL = "https://hhvtyobdehpwtsgiaytr.supabase.co";
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhodnR5b2JkZWhwd3RzZ2lheXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNDA3MzcsImV4cCI6MjAwMDYxNjczN30.a6TTFLWY6WpsjGRVnNLbY7v301VkZwDuGomQ4S0KQVc";

export const supabase = createClient(projectURL, projectKey);


