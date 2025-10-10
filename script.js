function showCalculator() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('support').style.display = 'none';
    document.getElementById('calculatorOptions').style.display = 'block';
    document.getElementById('semesterForm').style.display = 'none';
    document.getElementById('moduleForm').style.display = 'none';
}

function showModuleSection() {
    document.getElementById('module').style.display = 'block';
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'none';
}

function showModule(module) {
    document.getElementById('moduleoptions').style.display = 'none';
    document.getElementById('moduleContent').style.display = 'block';

    let moduleTitle = '';
    let moduleContent = '';

    switch (module) {
        case 'show':
            moduleTitle = 'Affichage';
            moduleContent = `
                <p>Autodesk AutoCAD 2026.1 : Cliquez ici pour le <a href="https://s2.pesk.top/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NjcyMjU2MDAsInN1YiI6IkF1dG9kZXNrIEF1dG9DQUQgMjAyNi4xIEJ1aWxkIFcuMTIyLjAuMCBbcGVza3RvcC5jb21dLnJhciIsInNvdXJjZSI6Imh0dHBzOlwvXC9wZXNrdG9wLmNvbVwvIn0.muMY5c5QJZBlu7ud-8ef7LdKTRXFMcxsLibZFZ5cf1s" target="_blank">téléchargement direct</a> & consultez les <a href="https://drive.google.com/file/d/1qo39pRdJAdr4qHxKEwXnwkGdMQyc8zwe/view?usp=sharing" target="_blank">instructions ici</a></p>
                <p>Emploi de Temps GM : <a href="https://drive.google.com/file/d/1wCq8m4-85wnbHQk9u7GGIVEXHY_oWnCI/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>Emploi de Temps GC : <a href="https://drive.google.com/file/d/1YbMbn7GxomGZmevXYu4GXEOZKhz1grp2/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>Emploi de Temps GP : <a href="https://drive.google.com/file/d/1TeeS5u1pjt4KeSJ3lCwUkRcIwvWY6ddO/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>Emploi de Temps ELT : <a href="https://drive.google.com/file/d/1LJ0Lm7rtuCyFcPX4bejWnBKCsCrzQ91v/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>   
            `;
            break;
        case 'rat':
            moduleTitle = 'Rattrapage';
            moduleContent = `
              <p>Soon.</p>
            `;
            break;     
        case 'analyse':
            moduleTitle = 'Analyse 3';
            moduleContent = `
               <p>Nothing to show right now.</p>
            `;
            break;
        case 'analysenum':
            moduleTitle = 'Analyse numérique';
            moduleContent = `
               <p>Nothing to show right now.</p>
            `;
            break;
        case 'analyse':
            moduleTitle = 'Ondes et vibrations';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;
        case 'electricite':
            moduleTitle = 'Electricité fondamentale';
            moduleContent = `
             <p>Chapitre 1 : <a href="https://drive.google.com/file/d/1DporvTUYrD_liIW2TAJrSjeY7ZrqO02q/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
             <p>Chapitre 2 : <a href="https://drive.google.com/file/d/1NZEnfswoz9aRs651hizHtKIaWc1HIyZZ/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
             <p>Chapitre 3 : <a href="https://drive.google.com/file/d/1c6tW09pXHaG5LcxdWQVsd8JsYmtsQkVx/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
            
        case 'mecanique':
            moduleTitle = 'Mécanique rationnelle';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;            
            
        case 'python':
            moduleTitle = 'Programmation python';
            moduleContent = `
              <p>Nothing to show right now.</p>
            `;
            break;
        case 'dao':
            moduleTitle = 'DAO';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;    
        case 'env':
            moduleTitle = 'Energie et environnement';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;
        case 'mat':
            moduleTitle = 'Matériaux composites';
            moduleContent = `
               <p>Nothing to show right now.</p>
            `;
            break;
        default:
            moduleTitle = 'Sélectionner un module';
            moduleContent = '<p>Veuillez sélectionner un module pour afficher le contenu.</p>';
    }

    document.getElementById('moduleContent').innerHTML = `
        <h2>${moduleTitle}</h2>
        ${moduleContent}
        <button type="button" onclick="goBackInModule()" class="return-button top-return-button">Retour</button>
        <button type="button" onclick="goBackToMainMenu()" class="return-button top-return-button">Menu Principal</button>

    `
    ;
}

function goBackInModule() {
    // Hide the module content section
    document.getElementById('moduleContent').style.display = 'none';

    // Show the module selection buttons
    document.getElementById('moduleoptions').style.display = 'block';
}

function showSupport() {
    document.getElementById('module').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'block';
}

function goBackToMainMenu() {
    document.getElementById('module').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('options').style.display = 'block';
}

function showSemesterCalculator() {
    document.getElementById('module').style.display = 'none';
    document.getElementById('calculatorOptions').style.display = 'none';
    document.getElementById('semesterForm').style.display = 'block';
    document.getElementById('moduleForm').style.display = 'none';
}

function goBackInCalculator() {
    document.getElementById('module').style.display = 'none';
    document.getElementById('semesterForm').style.display = 'none';
    document.getElementById('moduleForm').style.display = 'none';
    document.getElementById('calculatorOptions').style.display = 'block';
}

function showModuleCalculator() {
    document.getElementById('calculatorOptions').style.display = 'none';
    document.getElementById('moduleForm').style.display = 'block';
    document.getElementById('semesterForm').style.display = 'none';
}

function calculateAverage() {
    const inputs = document.querySelectorAll('#semesterForm input[type="number"]');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value === '' || isNaN(input.value)) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!isValid) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
    }

    const analyse_td = parseFloat(document.getElementById('analyse_td').value);
    const analyse_exam = parseFloat(document.getElementById('analyse_exam').value);
    const analysenum_td = parseFloat(document.getElementById('analysenum_td').value);
    const analysenum_tp = parseFloat(document.getElementById('analysenum_tp').value);
    const analysenum_exam = parseFloat(document.getElementById('analysenum_exam').value);
    const ondes_td = parseFloat(document.getElementById('ondes_td').value);
    const ondes_tp = parseFloat(document.getElementById('ondes_tp').value);
    const ondes_exam = parseFloat(document.getElementById('ondes_exam').value);
    const electricite_td = parseFloat(document.getElementById('electricite_td').value);
    const electricite_tp = parseFloat(document.getElementById('electricite_tp').value);
    const electricite_exam = parseFloat(document.getElementById('electricite_exam').value);
    const mecanique_td = parseFloat(document.getElementById('mecanique_td').value);
    const mecanique_exam = parseFloat(document.getElementById('mecanique_exam').value);
    const python_td = parseFloat(document.getElementById('python_td').value);
    const python_exam = parseFloat(document.getElementById('python_exam').value);
    const dao_td = parseFloat(document.getElementById('dao_td').value);
    const env_exam = parseFloat(document.getElementById('env_exam').value);
    const mat_exam = parseFloat(document.getElementById('mat_exam').value);
    const note_analyse = (analyse_td * 0.4) + (analyse_exam * 0.6);
    const note_analysenum = ((analysenum_td) * 0.2 + (analysenum_tp) * 0.2) + (analysenum_exam * 0.6);
    const note_ondes = ((ondes_td) * 0.2 + (ondes_tp) * 0.2) + (ondes_exam * 0.6);
    const note_electricite = ((electricite_td) * 0.2 + (electricite_tp) * 0.2) + (electricite_exam * 0.6);
    const note_mecanique = (mecanique_td * 0.4) + (mecanique_exam * 0.6);
    const note_python = (python_td * 0.4) + (python_exam * 0.6);
    const note_dao = dao_td;
    const note_env = env_exam;
    const note_mat = mat_exam;
    const moy_uef = (note_ondes * 3 + note_electricite * 3 + note_analysenum * 3 + note_analyse * 3) / 12;
    const moy_uem = (note_python * 2 + note_mecanique * 2) / 4;
    const moy_uet = (note_dao * 1 + note_env * 1 + note_mat * 1) / 3;
    const moyenne_semestre = (moy_uef * 12 + moy_uem * 4 + moy_uet * 3) / 19;
    document.getElementById('result').innerText = `Votre moyenne du semestre est : ${moyenne_semestre.toFixed(2)}`;
}

function calculateModuleAverage() {
    const moduleType = document.getElementById('moduleSelect').value;
    const moduleTd = parseFloat(document.getElementById('module_td').value); 
    const moduleTp = parseFloat(document.getElementById('module_tp').value);
    const moduleExam = parseFloat(document.getElementById('module_exam').value); 
    let moduleAverage;
    switch (moduleType) {
        case 'ondes':
        case 'analysenum':
        case 'electricite':  
            if (isNaN(moduleTd) || isNaN(moduleTp) || isNaN(moduleExam)) {
                alert('Veuillez remplir tous les champs pour ce module.');
                return;
            }
            moduleAverage = ((moduleTd + moduleTp) * 0.2) + (moduleExam * 0.6);
            break;

        case 'analyse':
        case 'mecanique':
        case 'python':
            if (isNaN(moduleTd) || isNaN(moduleExam)) {
                alert('Veuillez remplir tous les champs pour ce module.');
                return;
            }
            moduleAverage = (moduleTd * 0.4) + (moduleExam * 0.6);
            break;

        case 'dao':
            if (isNaN(moduleTd)) {
                alert('Veuillez remplir la note de TD pour ce module.');
                return;
            }
            moduleAverage = moduleTd * 1;
            break;

        case 'env':
        case 'mat':
            if (isNaN(moduleExam)) {
                alert('Veuillez remplir la note d\'examen pour ce module.');
                return;
            }
            moduleAverage = moduleExam * 1;
            break;


        default:
            alert('Type de module non reconnu.');
            return;
    }

    document.getElementById('moduleaverageResult').innerText = moduleAverage.toFixed(2);
}
