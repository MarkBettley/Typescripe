"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateAge(birthDateStr) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDateStr)) {
        throw new Error('Formato inválido. Use YYYY-MM-DD');
    }
    const birthDate = new Date(birthDateStr);
    const today = new Date();
    if (isNaN(birthDate.getTime())) {
        throw new Error('Fecha no válida');
    }
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
const fechas = ['1990-05-15', '2000-12-25', '2020-01-01'];
fechas.forEach(f => {
    try {
        console.log(`${f} -> ${calculateAge(f)} años`);
    }
    catch (e) {
        console.error(e.message);
    }
});
//# sourceMappingURL=app.js.map