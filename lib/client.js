import { createClient } from "@supabase/supabase-js";

const supabase = createClient({
  supabaseUrl: 'https://nccdeafdhbhwhjzmohln.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jY2RlYWZkaGJod2hqem1vaGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5Njg2NjAsImV4cCI6MTk5MjU0NDY2MH0.tT3ksWIxTR62IxAwRh-YSMc6SWoO7pu7cza7IthMQS8',}
);