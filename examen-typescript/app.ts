// app.ts - Calcula la edad a partir de la fecha de nacimiento

/**
 * Calcula la edad exacta en años a partir de una fecha de nacimiento.
 * @param birthDateStr Fecha en formato 'YYYY-MM-DD'
 * @returns Número de años cumplidos hasta la fecha actual
 */
function calculateAge(birthDateStr: string): number {
    // Validar que la fecha tenga el formato correcto
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDateStr)) {
        throw new Error('Formato de fecha inválido. Use YYYY-MM-DD');
    }

    const birthDate = new Date(birthDateStr);
    const today = new Date();

    // Validar que la fecha sea válida
    if (isNaN(birthDate.getTime())) {
        throw new Error('Fecha de nacimiento no válida');
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Ajustar si aún no ha pasado el cumpleaños este año
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Ejemplo de uso y prueba en consola
const birthDates: string[] = [
    '1990-05-15',
    '2000-12-25',
    '2020-01-01',
    '1985-07-10'
];

console.log('=== Cálculo de Edad ===');
birthDates.forEach(date => {
    try {
        const age = calculateAge(date);
        console.log(`Fecha: ${date} -> Edad: ${age} años`);
    } catch (error) {
        console.error(`Error con fecha ${date}:`, (error as Error).message);
    }
});

// Ejemplo interactivo (opcional, descomentar si se quiere leer entrada del usuario)
/*
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa tu fecha de nacimiento (YYYY-MM-DD): ', (input) => {
    try {
        const age = calculateAge(input);
        console.log(`Tienes ${age} años.`);
    } catch (error) {
        console.error((error as Error).message);
    }
    rl.close();
});
*/