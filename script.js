function showCalculator() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('support').style.display = 'none';
    document.getElementById('calculatorOptions').style.display = 'block';
    document.getElementById('semesterForm').style.display = 'none';
    document.getElementById('moduleForm').style.display = 'none';
}

function showSupport() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'block';
}

function goBackToMainMenu() {
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'none';
    document.getElementById('options').style.display = 'block';
}

function showSemesterCalculator() {
    document.getElementById('calculatorOptions').style.display = 'none';
    document.getElementById('semesterForm').style.display = 'block';
    document.getElementById('moduleForm').style.display = 'none';
}

function goBackInCalculator() {
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

    const physique_td_tp = parseFloat(document.getElementById('physique_td_tp').value);
    const physique_exam = parseFloat(document.getElementById('physique_exam').value);
    const chimie_td_tp = parseFloat(document.getElementById('chimie_td_tp').value);
    const chimie_exam = parseFloat(document.getElementById('chimie_exam').value);
    const analyse_td = parseFloat(document.getElementById('analyse_td').value);
    const analyse_exam = parseFloat(document.getElementById('analyse_exam').value);
    const algebre_td = parseFloat(document.getElementById('algebre_td').value);
    const algebre_exam = parseFloat(document.getElementById('algebre_exam').value);
    const proba_td = parseFloat(document.getElementById('proba_td').value);
    const proba_exam = parseFloat(document.getElementById('proba_exam').value);
    const informatique_td = parseFloat(document.getElementById('informatique_td').value);
    const langue_td = parseFloat(document.getElementById('langue_td').value);
    const ded_exam = parseFloat(document.getElementById('ded_exam').value);
    const note_physique = ((physique_td_tp / 2) * 0.4) + (physique_exam * 0.6);
    const note_chimie = ((chimie_td_tp / 2) * 0.4) + (chimie_exam * 0.6);
    const note_analyse = (analyse_td * 0.4) + (analyse_exam * 0.6);
    const note_algebre = (algebre_td * 0.4) + (algebre_exam * 0.6);
    const note_proba = (proba_td * 0.4) + (proba_exam * 0.6);
    const note_informatique = informatique_td;
    const note_langue = langue_td;
    const note_ded = ded_exam;
    const moy_uef = (note_analyse * 3 + note_algebre * 2 + note_proba * 2 + note_chimie * 4 + note_physique * 4) / 15;
    const moy_uem = (note_informatique * 2) / 2;
    const moy_uet = (note_langue * 1 + note_ded * 1) / 2;
    const moyenne_semestre = (moy_uef * 15 + moy_uem * 2 + moy_uet * 2) / 19;
    document.getElementById('result').innerText = `Votre moyenne du semestre est : ${moyenne_semestre.toFixed(2)}`;
}

function calculateModuleAverage() {
    const moduleType = document.getElementById('moduleSelect').value;
    const moduleTd = parseFloat(document.getElementById('module_td').value); 
    const moduleTp = parseFloat(document.getElementById('module_tp').value);
    const moduleExam = parseFloat(document.getElementById('module_exam').value); 
    let moduleAverage;
    switch (moduleType) {
        case 'physique':
        case 'chimie':
            if (isNaN(moduleTd) || isNaN(moduleTp) || isNaN(moduleExam)) {
                alert('Veuillez remplir tous les champs pour ce module.');
                return;
            }
            moduleAverage = ((moduleTd + moduleTp) * 0.2) + (moduleExam * 0.6);
            break;

        case 'analyse':
        case 'algebre':
        case 'proba':
            if (isNaN(moduleTd) || isNaN(moduleExam)) {
                alert('Veuillez remplir tous les champs pour ce module.');
                return;
            }
            moduleAverage = (moduleTd * 0.4) + (moduleExam * 0.6);
            break;

        case 'informatique':
        case 'langue':
            if (isNaN(moduleTd)) {
                alert('Veuillez remplir la note de TD pour ce module.');
                return;
            }
            moduleAverage = moduleTd * 1;
            break;

        case 'ded':
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
