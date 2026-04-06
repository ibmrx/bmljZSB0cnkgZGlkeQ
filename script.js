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
                <p>Emploi de Temps GM : <a href="https://drive.google.com/file/d/1FNkO6hAyzEfQ18IVfNWz3AhnXU4Jolew/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
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
               <p>Séries numériques : <a href="https://drive.google.com/file/d/1SGkQt3NbdZ8_31aK87-XlSOAM8K9gXy7/view" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'analysenum':
            moduleTitle = 'Analyse numérique';
            moduleContent = `
               <p>Équations Non Linéiares : <a href="https://drive.google.com/file/d/1XJfEw7oADUS2gy708bajkKLQUP8uuJA0/view" target="_blank">Télécharger le PDF</a></p>
               <p>Systèmes d'Équations Linéaires : <a href="https://drive.google.com/file/d/1Xc3hQJmyedlAVVsOqiTRod1HBYkIGTQC/view" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'ondes':
            moduleTitle = 'Ondes et vibrations';
            moduleContent = `
                <p>Cours de Chapitre 1 : <a href="https://drive.google.com/file/d/16cK5FQZ4UQNA6OMSy1dgG_0vwhHjP26S/view" target="_blank">Télécharger le PDF</a></p>
                <p>Exercises Revision sur Chapitre 1 : <a href="https://drive.google.com/file/d/13qFKkC9osVZrfG_fuCOsheR5FcIrir-p/view" target="_blank">Télécharger le PDF</a></p>
                <p>Cours de Chapitre 2 : <a href="https://drive.google.com/file/d/1e1HKrtp1b5VoWbqZfa-NWOT7Xq6su3xM/view" target="_blank">Télécharger le PDF</a></p>
                <p>Exercises Revision sur Chapitre 2 : <a href="https://drive.google.com/file/d/1ocKMD4PpLHcGqKJdKdc-FAmFDV1aV8c7/view" target="_blank">Télécharger le PDF</a></p>
                <p>Cours de Chapitre 3-a : <a href="https://drive.google.com/file/d/1EWtJAK9tFbZBqkR7-pnicVhyo6u0Vt6O/view" target="_blank">Télécharger le PDF</a></p>
                <p>Cours de Chapitre 3-b : <a href="https://drive.google.com/file/d/13_0CQtAdgpO-vL1Ua55J9M6RpObZ-Mxf/view" target="_blank">Télécharger le PDF</a></p>
                <p>Exercises Revision sur Chapitre 3 : <a href="https://drive.google.com/file/d/1Z3hQwH2bhOj8ZKV9boeWwYEm_C0AfWbN/view" target="_blank">Télécharger le PDF</a></p>
                <p>Cours de Chapitre 4 : <a href="http://drive.google.com/file/d/1EUSObAGuBIDdfj1QMKLlZSyPQyH6N1Tl/view" target="_blank">Télécharger le PDF</a></p>
                <p>Exercises Revision sur Chapitre 4 : <a href="https://drive.google.com/file/d/1V-Zu1kzO3BkX4uESpvZyKb-qqUVuSUmh/view" target="_blank">Télécharger le PDF</a></p>
                <p>Cours de Chapitre 5 : <a href="https://drive.google.com/file/d/1cmVbjB1hNTKbjhsonZ3BclKTvZewRqbg/view" target="_blank">Télécharger le PDF</a></p>
                <p>Exercises Revision sur Chapitre 5 : <a href="https://drive.google.com/file/d/11GfOZSq21gm-t6S0frO6LkDXRkbH4Vuy/view" target="_blank">Télécharger le PDF</a></p>
                <p>Interrogation 1-a : <a href="https://drive.google.com/file/d/1e88ms0-w9WboJ37lJFrjNeEMkt6aq7xX/view" target="_blank">Télécharger le PDF</a></p>
                <p>Interrogation 1-b : <a href="https://drive.google.com/file/d/1cK0RuFHYzwUv3bH3jNyD2cdLd2kp1XII/view" target="_blank">Télécharger le PDF</a></p>
                <p>Interrogation 2-a : <a href="https://drive.google.com/file/d/1eGSXSGOb2XMrbPEBihmLtTSjKwaMGeBi/view" target="_blank">Télécharger le PDF</a></p>
                <p>Interrogation 2-b : <a href="https://drive.google.com/file/d/1EjPx5Maz-fN3vvi2nS8Kis9G_VaQD_qE/view" target="_blank">Télécharger le PDF</a></p>
                <p>Interrogation 2-c : <a href="https://drive.google.com/file/d/1NPVfDmXU4EVzLbYcZJycHFGiqwG8jry1/view" target="_blank">Télécharger le PDF</a></p>
                <p>Examen 2010 : <a href="https://drive.google.com/file/d/1PZE_1ytL0bKW2ZAqQ31Y6Rn0p5ZTh8K7/view" target="_blank">Télécharger le PDF</a></p>
                <p>Examen 2012 : <a href="https://drive.google.com/file/d/1P1KDcr2NW5YVK6PR0e8XKBH_v5Ai30Jt/view" target="_blank">Télécharger le PDF</a></p>
                <p>Examen 2013 (1) : <a href="https://drive.google.com/file/d/1ViHPzNvVkEOw0ZvpaUzmUTmsbu7j2jMC/view" target="_blank">Télécharger le PDF</a></p>
                <p>Examen 2013 (2) : <a href="https://drive.google.com/file/d/1KtguaCxr5rC1pmbYifOINZHCfz5cauOx/view" target="_blank">Télécharger le PDF</a></p>
                <p>Rattrapage 2012 : <a href="https://drive.google.com/file/d/1El2RDsIKPcKZo6Rjy3afUXk3P3Vfw9Yg/view" target="_blank">Télécharger le PDF</a></p>
                <p>Rattrapage 2013 : <a href="https://drive.google.com/file/d/1faUACGvI_oKU1Ec5nEUA9PpSataz5-Zm/view" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'electricite':
            moduleTitle = 'Electricité fondamentale';
            moduleContent = `
            <p>Nothing to show right now.</p>
            `;
            break;
            
        case 'mecanique':
            moduleTitle = 'Mécanique rationnelle';
            moduleContent = `
                <p>Cours : <a href="https://drive.google.com/file/d/1d3k5dMqXImrwg49XP1B1kcrXIwq-BQbw/view?usp=drive_link target="_blank">Télécharger le PDF</a></p>
                <p>Cours et Exercices : <a href="https://drive.google.com/file/d/1rFxPMiFWOq6yvzkOiA7Z_8XR46ZxqwHp/view?usp=drive_link" target="_blank">Télécharger le PDF</a></p>
            `;
            break;            
            
        case 'python':
            moduleTitle = 'Programmation python';
            moduleContent = `
                <p>Python course : <a href="https://drive.google.com/file/d/1sJXEzQ5wXjowVP6VQZXv5kIaORXHWUsB/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>TP-01 : <a href="https://drive.google.com/file/d/1Jw_-kDhFm14csR-ctiiDUFf5CNmfxjYt/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>         
            `;
            break;
        case 'dao':
            moduleTitle = 'DAO';
            moduleContent = `
                <p>SolidWorks 2022 SP0 Full Premium Free Full Activated (14.7 GB) : Cliquez ici pour le <a href="https://s2.pesk.top/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NjcyMjU2MDAsInN1YiI6IkRTLlNvbGlkV29ya3MuMjAyMi5TUDAuUHJlbWl1bS1TU1EgW1Blc2tUb3AuY29tXS5yYXIiLCJzb3VyY2UiOiJodHRwczpcL1wvcGVza3RvcC5jb21cLyJ9.YFfl5Mf0DPV5r3g65msg6wIyYSnro4yiUgwdvjNwfM8" target="_blank">téléchargement direct</a> & consultez les <a href="https://drive.google.com/file/d/1qo39pRdJAdr4qHxKEwXnwkGdMQyc8zwe/view?usp=sharing" target="_blank">instructions ici</a></p>
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
