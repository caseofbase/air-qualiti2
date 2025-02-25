const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://yxjdtmyovbhlputwkgyg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4amR0bXlvdmJobHB1dHdrZ3lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMzI2MzAsImV4cCI6MjA0MzcwODYzMH0.u-Iy7MyAPP1VlHWwkb1X1CW6r-YcqzyeZY_MhPV6euI';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase; 