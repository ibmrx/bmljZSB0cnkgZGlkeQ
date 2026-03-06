
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
                <p>Nothing to show right now.</p>
            `;
            break;
        case 'rat':
            moduleTitle = 'Rattrapage';
            moduleContent = `
              <p>Soon.</p>
            `;
            break;     
        case 'ctm':
            moduleTitle = 'Construction Mécanique';
            moduleContent = `
               <p>Nothing to show right now.</p>
            `;
            break;
        case 'mdf':
            moduleTitle = 'Mécanique des Fluides';
            moduleContent = `
               <p>Nothing to show right now.</p>
            `;
            break;
        case 'rdm':
            moduleTitle = 'Résistance des Matériaux';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;
        case 'sm':
            moduleTitle = 'Structure Métalliques';
            moduleContent = `
            <p>Nothing to show right now.</p>
            `;
            break;
            
        case 'mat':
            moduleTitle = 'Matérieux'
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;            
            
        case 'mm':
            moduleTitle = 'Mesures et Métrologie';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;
        case 'cao':
            moduleTitle = 'CAO';
            moduleContent = `
                <p>SolidWorks 2022 SP0 Full Premium Free Full Activated (14.7 GB) : Cliquez ici pour le <a href="https://s2.pesk.top/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NjcyMjU2MDAsInN1YiI6IkRTLlNvbGlkV29ya3MuMjAyMi5TUDAuUHJlbWl1bS1TU1EgW1Blc2tUb3AuY29tXS5yYXIiLCJzb3VyY2UiOiJodHRwczpcL1wvcGVza3RvcC5jb21cLyJ9.YFfl5Mf0DPV5r3g65msg6wIyYSnro4yiUgwdvjNwfM8" target="_blank">téléchargement direct</a> & consultez les <a href="https://drive.google.com/file/d/1qo39pRdJAdr4qHxKEwXnwkGdMQyc8zwe/view?usp=sharing" target="_blank">instructions ici</a></p>
            `;
            break;    
        case 'ananum':
            moduleTitle = 'Analyse numérique 2';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;
        case 'tic':
            moduleTitle = 'Techniques d’information et de communication';
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

    const ctm_td = parseFloat(document.getElementById('ctm_td').value);
    const ctm_exam = parseFloat(document.getElementById('ctm_exam').value);
    const mdf_td = parseFloat(document.getElementById('mdf_td').value);
    const mdf_tp = parseFloat(document.getElementById('mdf_tp').value);
    const mdf_exam = parseFloat(document.getElementById('mdf_exam').value);
    const rdm_td = parseFloat(document.getElementById('rdm_td').value);
    const rdm_exam = parseFloat(document.getElementById('rdm_exam').value);
    const sm_td = parseFloat(document.getElementById('sm_td').value);
    const sm_exam = parseFloat(document.getElementById('sm_exam').value);
    const mat_td = parseFloat(document.getElementById('mat_td').value);
    const mat_exam = parseFloat(document.getElementById('mat_exam').value);
    const mm_tp = parseFloat(document.getElementById('mm_tp').value);
    const mm_exam = parseFloat(document.getElementById('mm_exam').value);
    const cao_tp = parseFloat(document.getElementById('cao_tp').value);
    const ananum_exam = parseFloat(document.getElementById('ananum_exam').value);
    const ananum_tp = parseFloat(document.getElementById('ananum_tp').value);
    const tic_exam = parseFloat(document.getElementById('tic_exam').value);
    const tic_tp = parseFloat(document.getElementById('tic_tp').value);
    const note_ctm = (ctm_td * 0.4) + (ctm_exam * 0.6);
    const note_mdf = (mdf_td * 0.2) + (mdf_tp * 0.2) + (mdf_exam * 0.6);
    const note_rdm = rdm_td * 0.4 + rdm_exam * 0.6;
    const note_sm = sm_td * 0.4 + sm_exam * 0.6;
    const note_mat = mat_td * 0.4 + mat_exam * 0.6;
    const note_mm = mm_tp * 0.4 + mm_exam * 0.6;
    const note_cao = cao_tp;
    const note_ananum = (ananum_tp) * 0.4 + (ananum_exam * 0.6);
    const note_tic = (tic_tp * 0.4) + (tic_exam * 0.6);
    const moy_uef = (note_mdf * 3 + note_ctm * 2) / 5;
    const moy_uef1 = (note_rdm * 2 + note_sm * 2 + note_mat * 2) / 6;
    const moy_uem = (note_mm * 2 + note_ananum * 2 + note_cao * 2) / 6;
    const moy_uet = (note_tic * 2) / 2;
    const moyenne_semestre = (moy_uef * 5 + moy_uef1 * 6 + moy_uem * 6 + moy_uet * 2) / 19;
    document.getElementById('result').innerText = `Votre moyenne du semestre est : ${moyenne_semestre.toFixed(2)}`;
}

function calculateModuleAverage() {
    const moduleType = document.getElementById('moduleSelect').value;
    const moduleTd = parseFloat(document.getElementById('module_td').value); 
    const moduleTp = parseFloat(document.getElementById('module_tp').value);
    const moduleExam = parseFloat(document.getElementById('module_exam').value); 
    let moduleAverage;
    switch (moduleType) {
        case 'mdf':
            if (isNaN(moduleTd) || isNaN(moduleTp) || isNaN(moduleExam)) {
                alert('Veuillez remplir tous les champs pour ce module.');
                return;
            }
            moduleAverage = ((moduleTd + moduleTp) * 0.2) + (moduleExam * 0.6);
            break;

        case 'ctm':
        case 'mat':
        case 'mm':
        case 'sm':
        case 'rdm':
        case 'cao':
            if (isNaN(moduleTd) || isNaN(moduleExam)) {
                alert('Veuillez remplir tous les champs pour ce module.');
                return;
            }
            moduleAverage = (moduleTd * 0.4) + (moduleExam * 0.6);
            break;

        case 'tic':
        case 'ananum':
            if (isNaN(moduleTp)) {
                alert('Veuillez remplir la note de TP pour ce module.');
                return;
            }
            moduleAverage = (moduleTp * 0.4) + (moduleExam * 0.6);
            break;

        default:
            alert('Type de module non reconnu.');
            return;
    }

    document.getElementById('moduleaverageResult').innerText = moduleAverage.toFixed(2);
}
