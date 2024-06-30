// Atualizar campo de idade quando a data de nascimento for alterada
document.getElementById('dob').addEventListener('input', function() {
    const dob = this.value;
    const age = calculateAge(dob);
    document.getElementById('age').value = age;
});

// Função para adicionar nova experiência profissional
document.getElementById('addExperience').addEventListener('click', function() {
    const experienceContainer = document.getElementById('experienceContainer');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-entry', 'mb-4');
    newExperience.innerHTML = `
        <label for="empresa" class="block text-sm font-medium text-gray-700">Empresa:</label>
        <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="empresas[]" id="empresa">
        <label for="funcao" class="block text-sm font-medium text-gray-700 mt-2">Função Exercida:</label>
        <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="funcoes[]" id="funcao">
        <label for="inicio" class="block text-sm font-medium text-gray-700 mt-2">Data de Início:</label>
        <input type="month" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="inicios[]" id="inicio">
        <label for="fim" class="block text-sm font-medium text-gray-700 mt-2">Data de Fim:</label>
        <input type="month" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="fins[]" id="fim">
        <input class="mt-2 form-check-input" type="checkbox" value="" id="atualmente">
        <label class="form-check-label ml-2" for="atualmente">Atualmente</label>
    `;
    experienceContainer.appendChild(newExperience);
});

// Função para adicionar nova formação acadêmica
document.getElementById('addEducation').addEventListener('click', function() {
    const educationContainer = document.getElementById('educationContainer');
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-entry', 'mb-4');
    newEducation.innerHTML = `
        <label for="instituicao" class="block text-sm font-medium text-gray-700">Instituição:</label>
        <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="instituicoes[]" id="instituicao">
        <label for="curso" class="block text-sm font-medium text-gray-700 mt-2">Curso:</label>
        <input type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="cursos[]" id="curso">
        <label for="inicio_curso" class="block text-sm font-medium text-gray-700 mt-2">Data de Início:</label>
        <input type="month" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="inicios_cursos[]" id="inicio_curso">
        <label for="fim_curso" class="block text-sm font-medium text-gray-700 mt-2">Data de Fim:</label>
        <input type="month" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" name="fins_cursos[]" id="fim_curso">
    `;
    educationContainer.appendChild(newEducation);
});

// Função para gerar PDF
function generatePDF() {
    // Lógica para gerar PDF
}

// Função para compartilhar no Facebook
function shareFacebook() {
    // Lógica para compartilhar no Facebook
}

// Função para compartilhar no Twitter
function shareTwitter() {
    // Lógica para compartilhar no Twitter
}

// Função para compartilhar no LinkedIn
function shareLinkedIn() {
    // Lógica para compartilhar no LinkedIn
}
