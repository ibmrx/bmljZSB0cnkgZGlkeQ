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
                <p>Emploi de Temps. <a href="https://elearning.univ-bejaia.dz/pluginfile.php/1372416/mod_resource/content/2/EDT-ST_ING_%20S2-24-25_ING%20TM.pdf" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        
        case 'physique':
            moduleTitle = 'Physique 2';
            moduleContent = `
                <p>TP: Polycopié de la Partie théorique IST3-2. <a href="https://drive.google.com/file/d/1jpA4hSCOP2RFy66jnJTTwMQ8vhzEpgD2/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>TP: Réponses de la Préparation théorique. <a href="https://drive.google.com/file/d/1VvFtFrJfyRPbAPANSMmdjeqmanvW7Mpj/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>Électricité: Tout ce dont vous avez besoin est ici. <a href="https://drive.google.com/drive/folders/1BN4rPvtbQCwolPk-ZtrTdtlWNsrsDXoB" target="_blank">Télécharger le PDF</a></p>
                <p>Éléctrostatique. <a href="https://ing-st.univ-batna2.dz/sites/default/files/ing-st/files/cours-p2-electricite-et-magnetisme.pdf" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'chimie':
            moduleTitle = 'Chimie 2';
            moduleContent = `
                <p>TP: Polycopié. <a href="https://drive.google.com/file/d/1UXLvKPdFmTW6Kj1HPWsRJBgSyCb39g6G/view" target="_blank">Télécharger le PDF</a></p>
                <p>TP: Préparation N°1 ~ Lois des gaz parfaits. <a href="https://drive.google.com/file/d/1SIvykRpZYuOAF02SdEjfx03XWh-26UZk/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>Constituants de la matière et radioactivité. <a href="https://drive.google.com/file/d/1G1DaWyGKzKHxbJLxQq0sXzRM0b2Uh4Cg/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
                <p>Cours de Thermodynamique. <a href="https://www.univ-usto.dz/images/coursenligne/Cours_thermodynamique_SAKER.pdf" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'analyse':
            moduleTitle = 'Analyse 2';
            moduleContent = `
                <p>Intégrales et calcul des Primitives. <a href="https://www.ces-stexupery.be/institut-sainte-marie/espace-interactif/mathematique/vandenbruaenne-andre/prim_integ_new4.pdf" target="_blank">Télécharger le PDF</a></p>
                <p>Cours et exercices prof Rachid BOUKOUCHA. <a href="https://elearning.univ-bejaia.dz/pluginfile.php/1002586/mod_resource/content/0/Cours_BOUKOUCHA%20Rachid_Cours%20et%20Exercices%20Corrig%C3%A9s%20d%E2%80%99Analyse%20II.pdf" target="_blank">Télécharger le PDF</a></p>
                <p>Les régles d'Intégration. <a href="https://drive.google.com/file/d/1ge9N-DFBViNtGMPd4LjWrSX3t4hvn6ZN/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'algebre':
            moduleTitle = 'Algèbre 2';
            moduleContent = `
                <p>Les Espaces Vectoriels. <a href="https://elearn.univ-tlemcen.dz/pluginfile.php/118248/mod_resource/content/1/Cours%20%20TD%20sur%20les%20espaces%20vectoriels.pdf" target="_blank">Télécharger le PDF</a></p>
                <p>Elementary Linear Algebra by Ron Larson. <a href="https://drive.google.com/file/d/15hLOtdm0Da6ebMNGMeh2oLCIvKF_Oi-_/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'informatique':
            moduleTitle = 'Programmation';
            moduleContent = `
                <p>Les Bases Algorithmes de la Programmation en C. <a href="https://drive.google.com/file/d/1mOWFU3CUJrnzMs46Lrz9ha-R55EkZJ6v/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'ang':
            moduleTitle = 'Anglais 2';
            moduleContent = `
                <p>Nothing to show right now.</p>
            `;
            break;    
        case 'metiers':
            moduleTitle = 'Les Métiers de l\'Ingénieur';
            moduleContent = `
                <p>Les Métiers de l'Ingénieur. <a href="https://ing-st.univ-batna2.dz/sites/default/files/ing-st/files/les_metiers_de_lingenieur.pdf" target="_blank">Télécharger le PDF</a></p>
            `;
            break;
        case 'dessin':
            moduleTitle = 'Dessin Technique';
            moduleContent = `
                <p>Cours de Dessin Technique. <a href="https://dspace.univ-guelma.dz/jspui/bitstream/123456789/573/1/Brochure%20Mouassa.pdf" target="_blank">Télécharger le PDF</a></p>
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
