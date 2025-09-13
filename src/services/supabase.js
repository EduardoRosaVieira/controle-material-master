import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkhzwqfpayjgbzmbfjfn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raHp3cWZwYXlqZ2J6bWJmamZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNTEyNjYsImV4cCI6MjA2NDgyNzI2Nn0.F-_2kyN2lEXvtgY8c0XbWZmlAESVzlBd3Uv6NiaOBD4';
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getUsuarios() {
	const { data, error } = await supabase.from('usuarios').select('*');
	if (error) return [];
	return data;
}

export async function deleteUsuario(id) {
	const { error } = await supabase.from('usuarios').delete().eq('id', id);
	return error == null;
}

export async function updateUsuario(usuario) {
	const { id, ...dados } = usuario;
	const { error } = await supabase
		.from('usuarios')
		.update(dados)
		.eq('id', id);
	return error == null;
}