// ============ SEMESTER DATA ============

const semesterData = {
    S3: {
        name: "Semestre 3",
        modules: [
            { id: "analyse", name: "Analyse 3", hasTD: true, hasTP: false, hasExam: true, coeff: { td: 0.4, exam: 0.6 } },
            { id: "analysenum", name: "Analyse numérique 1", hasTD: true, hasTP: true, hasExam: true, coeff: { td: 0.2, tp: 0.2, exam: 0.6 } },
            { id: "ondes", name: "Ondes et vibrations", hasTD: true, hasTP: true, hasExam: true, coeff: { td: 0.2, tp: 0.2, exam: 0.6 } },
            { id: "electricite", name: "Electricité fondamentale", hasTD: true, hasTP: true, hasExam: true, coeff: { td: 0.2, tp: 0.2, exam: 0.6 } },
            { id: "mecanique", name: "Mécanique rationnelle", hasTD: true, hasTP: false, hasExam: true, coeff: { td: 0.4, exam: 0.6 } },
            { id: "python", name: "Programmation python", hasTD: true, hasTP: false, hasExam: true, coeff: { td: 0.4, exam: 0.6 } },
            { id: "dao", name: "DAO", hasTD: true, hasTP: false, hasExam: false, coeff: { td: 1 } },
            { id: "env", name: "Energie et environnement", hasTD: false, hasTP: false, hasExam: true, coeff: { exam: 1 } },
            { id: "mat", name: "Matériaux composites", hasTD: false, hasTP: false, hasExam: true, coeff: { exam: 1 } }
        ],
        moduleContent: {
            show: '<p>Emploi de Temps GM : <a href="https://drive.google.com/file/d/1FNkO6hAyzEfQ18IVfNWz3AhnXU4Jolew/view?usp=sharing" target="_blank">Télécharger le PDF</a></p><p>Emploi de Temps GC : <a href="https://drive.google.com/file/d/1YbMbn7GxomGZmevXYu4GXEOZKhz1grp2/view?usp=sharing" target="_blank">Télécharger le PDF</a></p><p>Emploi de Temps GP : <a href="https://drive.google.com/file/d/1TeeS5u1pjt4KeSJ3lCwUkRcIwvWY6ddO/view?usp=sharing" target="_blank">Télécharger le PDF</a></p><p>Emploi de Temps ELT : <a href="https://drive.google.com/file/d/1LJ0Lm7rtuCyFcPX4bejWnBKCsCrzQ91v/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>',
            rat: '<p>Soon.</p>',
            analyse: '<p>Séries numériques : <a href="https://drive.google.com/file/d/1SGkQt3NbdZ8_31aK87-XlSOAM8K9gXy7/view" target="_blank">Télécharger le PDF</a></p>',
            analysenum: '<p>Équations Non Linéiares : <a href="https://drive.google.com/file/d/1XJfEw7oADUS2gy708bajkKLQUP8uuJA0/view" target="_blank">Télécharger le PDF</a></p><p>Systèmes d\'Équations Linéaires : <a href="https://drive.google.com/file/d/1Xc3hQJmyedlAVVsOqiTRod1HBYkIGTQC/view" target="_blank">Télécharger le PDF</a></p>',
            ondes: '<p>Cours de Chapitre 1 : <a href="https://drive.google.com/file/d/16cK5FQZ4UQNA6OMSy1dgG_0vwhHjP26S/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 1 : <a href="https://drive.google.com/file/d/13qFKkC9osVZrfG_fuCOsheR5FcIrir-p/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 2 : <a href="https://drive.google.com/file/d/1e1HKrtp1b5VoWbqZfa-NWOT7Xq6su3xM/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 2 : <a href="https://drive.google.com/file/d/1ocKMD4PpLHcGqKJdKdc-FAmFDV1aV8c7/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 3-a : <a href="https://drive.google.com/file/d/1EWtJAK9tFbZBqkR7-pnicVhyo6u0Vt6O/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 3-b : <a href="https://drive.google.com/file/d/13_0CQtAdgpO-vL1Ua55J9M6RpObZ-Mxf/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 3 : <a href="https://drive.google.com/file/d/1Z3hQwH2bhOj8ZKV9boeWwYEm_C0AfWbN/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 4 : <a href="http://drive.google.com/file/d/1EUSObAGuBIDdfj1QMKLlZSyPQyH6N1Tl/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 4 : <a href="https://drive.google.com/file/d/1V-Zu1kzO3BkX4uESpvZyKb-qqUVuSUmh/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 5 : <a href="https://drive.google.com/file/d/1cmVbjB1hNTKbjhsonZ3BclKTvZewRqbg/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 5 : <a href="https://drive.google.com/file/d/11GfOZSq21gm-t6S0frO6LkDXRkbH4Vuy/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 1-a : <a href="https://drive.google.com/file/d/1e88ms0-w9WboJ37lJFrjNeEMkt6aq7xX/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 1-b : <a href="https://drive.google.com/file/d/1cK0RuFHYzwUv3bH3jNyD2cdLd2kp1XII/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 2-a : <a href="https://drive.google.com/file/d/1eGSXSGOb2XMrbPEBihmLtTSjKwaMGeBi/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 2-b : <a href="https://drive.google.com/file/d/1EjPx5Maz-fN3vvi2nS8Kis9G_VaQD_qE/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 2-c : <a href="https://drive.google.com/file/d/1NPVfDmXU4EVzLbYcZJycHFGiqwG8jry1/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2010 : <a href="https://drive.google.com/file/d/1PZE_1ytL0bKW2ZAqQ31Y6Rn0p5ZTh8K7/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2012 : <a href="https://drive.google.com/file/d/1P1KDcr2NW5YVK6PR0e8XKBH_v5Ai30Jt/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2013 (1) : <a href="https://drive.google.com/file/d/1ViHPzNvVkEOw0ZvpaUzmUTmsbu7j2jMC/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2013 (2) : <a href="https://drive.google.com/file/d/1KtguaCxr5rC1pmbYifOINZHCfz5cauOx/view" target="_blank">Télécharger le PDF</a></p><p>Rattrapage 2012 : <a href="https://drive.google.com/file/d/1El2RDsIKPcKZo6Rjy3afUXk3P3Vfw9Yg/view" target="_blank">Télécharger le PDF</a></p><p>Rattrapage 2013 : <a href="https://drive.google.com/file/d/1faUACGvI_oKU1Ec5nEUA9PpSataz5-Zm/view" target="_blank">Télécharger le PDF</a></p>',
            electricite: '<p>Nothing to show right now.</p>',
            mecanique: '<p>Cours : <a href="https://drive.google.com/file/d/1d3k5dMqXImrwg49XP1B1kcrXIwq-BQbw/view?usp=drive_link" target="_blank">Télécharger le PDF</a></p><p>Cours et Exercices : <a href="https://drive.google.com/file/d/1rFxPMiFWOq6yvzkOiA7Z_8XR46ZxqwHp/view?usp=drive_link" target="_blank">Télécharger le PDF</a></p>',
            python: '<p>Python course : <a href="https://drive.google.com/file/d/1sJXEzQ5wXjowVP6VQZXv5kIaORXHWUsB/view?usp=sharing" target="_blank">Télécharger le PDF</a></p><p>TP-01 : <a href="https://drive.google.com/file/d/1Jw_-kDhFm14csR-ctiiDUFf5CNmfxjYt/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>',
            dao: '<p>SolidWorks 2022 SP0 Full Premium Free Full Activated (14.7 GB) : Cliquez ici pour le <a href="https://s2.pesk.top/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NjcyMjU2MDAsInN1YiI6IkRTLlNvbGlkV29ya3MuMjAyMi5TUDAuUHJlbWl1bS1TU1EgW1Blc2tUb3AuY29tXS5yYXIiLCJzb3VyY2UiOiJodHRwczpcL1wvcGVza3RvcC5jb21cLyJ9.YFfl5Mf0DPV5r3g65msg6wIyYSnro4yiUgwdvjNwfM8" target="_blank">téléchargement direct</a> & consultez les <a href="https://drive.google.com/file/d/1qo39pRdJAdr4qHxKEwXnwkGdMQyc8zwe/view?usp=sharing" target="_blank">instructions ici</a></p>',
            env: '<p>Nothing to show right now.</p>',
            mat: '<p>Nothing to show right now.</p>'
        }
    },
    S4: {
        name: "Semestre 4",
        modules: [
            { id: "ctm", name: "Construction Mécanique", hasTD: true, hasTP: false, hasExam: true, coeff: { td: 0.4, exam: 0.6 } },
            { id: "mdf", name: "Mécanique des Fluides", hasTD: true, hasTP: true, hasExam: true, coeff: { td: 0.2, tp: 0.2, exam: 0.6 } },
            { id: "rdm", name: "Résistance des Matériaux", hasTD: true, hasTP: false, hasExam: true, coeff: { td: 0.4, exam: 0.6 } },
            { id: "sm", name: "Structure Métalliques", hasTD: true, hasTP: false, hasExam: true, coeff: { td: 0.4, exam: 0.6 } },
            { id: "mat", name: "Matériaux", hasTD: true, hasTP: false, hasExam: true, coeff: { td: 0.4, exam: 0.6 } },
            { id: "mm", name: "Mesures et Métrologie", hasTD: false, hasTP: true, hasExam: true, coeff: { tp: 0.4, exam: 0.6 } },
            { id: "cao", name: "CAO", hasTD: false, hasTP: true, hasExam: false, coeff: { tp: 1 } },
            { id: "ananum", name: "Analyse numérique 2", hasTD: false, hasTP: true, hasExam: true, coeff: { tp: 0.4, exam: 0.6 } },
            { id: "tic", name: "Techniques d'information et de communication", hasTD: false, hasTP: true, hasExam: true, coeff: { tp: 0.4, exam: 0.6 } }
        ],
        moduleContent: {
            show: '<p>Nothing to show right now.</p>',
            rat: '<strong>Analyse 3</strong><hr><p>Séries numériques : <a href="https://drive.google.com/file/d/1SGkQt3NbdZ8_31aK87-XlSOAM8K9gXy7/view" target="_blank">Télécharger le PDF</a></p><p>Sujet d\'examen et Interrogation : <a href="https://drive.google.com/file/d/1iflSi1UqEIE3kciVzVx7ijPilpZRWheE/view?usp=sharing" target="_blank">Télécharger le PDF</a></p><strong>Analyse numérique</strong><hr><p>Équations Non Linéiares : <a href="https://drive.google.com/file/d/1XJfEw7oADUS2gy708bajkKLQUP8uuJA0/view" target="_blank">Télécharger le PDF</a></p><p>Systèmes d\'Équations Linéaires : <a href="https://drive.google.com/file/d/1Xc3hQJmyedlAVVsOqiTRod1HBYkIGTQC/view" target="_blank">Télécharger le PDF</a></p><p>Sujet d\'examen : <a href="https://drive.google.com/file/d/1sBoZnWtnVUfJW2bsTSTOG133J2JQwgtt/view?usp=sharing" target="_blank">Télécharger le PDF</a></p><p>Playlist YouTube : <a href="https://www.youtube.com/playlist?list=PL_Q9yPllUZUHTvdaJyjQkIvXO4rrdywXQ" target="_blank">Accès à la playlist</a></p><strong>Electricité fondamentale</strong><hr><p>Équations différentielles RC-RL : <a href="https://drive.google.com/file/d/1N-QA3_ytNo5U7B6JHDrkDZHdYuiiS9YJ/view?usp=drive_link" target="_blank">Télécharger le PDF</a></p><p>Playlist YouTube : <a href="https://www.youtube.com/playlist?list=PLaslJXXX-ksaK68kGxFMIy3m3BZevFm4i" target="_blank">Accès à la playlist</a></p><strong>Ondes et vibrations</strong><hr><p>Cours de Chapitre 1 : <a href="https://drive.google.com/file/d/16cK5FQZ4UQNA6OMSy1dgG_0vwhHjP26S/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 1 : <a href="https://drive.google.com/file/d/13qFKkC9osVZrfG_fuCOsheR5FcIrir-p/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 2 : <a href="https://drive.google.com/file/d/1e1HKrtp1b5VoWbqZfa-NWOT7Xq6su3xM/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 2 : <a href="https://drive.google.com/file/d/1ocKMD4PpLHcGqKJdKdc-FAmFDV1aV8c7/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 3-a : <a href="https://drive.google.com/file/d/1EWtJAK9tFbZBqkR7-pnicVhyo6u0Vt6O/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 3-b : <a href="https://drive.google.com/file/d/13_0CQtAdgpO-vL1Ua55J9M6RpObZ-Mxf/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 3 : <a href="https://drive.google.com/file/d/1Z3hQwH2bhOj8ZKV9boeWwYEm_C0AfWbN/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 4 : <a href="http://drive.google.com/file/d/1EUSObAGuBIDdfj1QMKLlZSyPQyH6N1Tl/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 4 : <a href="https://drive.google.com/file/d/1V-Zu1kzO3BkX4uESpvZyKb-qqUVuSUmh/view" target="_blank">Télécharger le PDF</a></p><p>Cours de Chapitre 5 : <a href="https://drive.google.com/file/d/1cmVbjB1hNTKbjhsonZ3BclKTvZewRqbg/view" target="_blank">Télécharger le PDF</a></p><p>Exercises Revision sur Chapitre 5 : <a href="https://drive.google.com/file/d/11GfOZSq21gm-t6S0frO6LkDXRkbH4Vuy/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 1-a : <a href="https://drive.google.com/file/d/1e88ms0-w9WboJ37lJFrjNeEMkt6aq7xX/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 1-b : <a href="https://drive.google.com/file/d/1cK0RuFHYzwUv3bH3jNyD2cdLd2kp1XII/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 2-a : <a href="https://drive.google.com/file/d/1eGSXSGOb2XMrbPEBihmLtTSjKwaMGeBi/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 2-b : <a href="https://drive.google.com/file/d/1EjPx5Maz-fN3vvi2nS8Kis9G_VaQD_qE/view" target="_blank">Télécharger le PDF</a></p><p>Interrogation 2-c : <a href="https://drive.google.com/file/d/1NPVfDmXU4EVzLbYcZJycHFGiqwG8jry1/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2010 : <a href="https://drive.google.com/file/d/1PZE_1ytL0bKW2ZAqQ31Y6Rn0p5ZTh8K7/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2012 : <a href="https://drive.google.com/file/d/1P1KDcr2NW5YVK6PR0e8XKBH_v5Ai30Jt/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2013 (1) : <a href="https://drive.google.com/file/d/1ViHPzNvVkEOw0ZvpaUzmUTmsbu7j2jMC/view" target="_blank">Télécharger le PDF</a></p><p>Examen 2013 (2) : <a href="https://drive.google.com/file/d/1KtguaCxr5rC1pmbYifOINZHCfz5cauOx/view" target="_blank">Télécharger le PDF</a></p><p>Rattrapage 2012 : <a href="https://drive.google.com/file/d/1El2RDsIKPcKZo6Rjy3afUXk3P3Vfw9Yg/view" target="_blank">Télécharger le PDF</a></p><p>Rattrapage 2013 : <a href="https://drive.google.com/file/d/1faUACGvI_oKU1Ec5nEUA9PpSataz5-Zm/view" target="_blank">Télécharger le PDF</a></p><strong>Mécanique rationnelle</strong><hr><p>Cours : <a href="https://drive.google.com/file/d/1d3k5dMqXImrwg49XP1B1kcrXIwq-BQbw/view?usp=drive_link" target="_blank">Télécharger le PDF</a></p><p>Cours et Exercices : <a href="https://drive.google.com/file/d/1rFxPMiFWOq6yvzkOiA7Z_8XR46ZxqwHp/view?usp=drive_link" target="_blank">Télécharger le PDF</a></p><p>Sujet d\'examen et Interrogation : <a href="https://drive.google.com/file/d/1tr1yu_zMvZ7nJjVLwKxgVWlZpVR26wu5/view?usp=sharing" target="_blank">Télécharger le PDF</a></p><p>Playlist YouTube : <a href="https://www.youtube.com/playlist?list=PLXePpKFSUW2ZxGn6VdAPY9d7l7HowWVYL" target="_blank">Accès à la playlist</a></p><strong>Programmation python</strong><hr><p>Cours : <a href="https://drive.google.com/file/d/1sJXEzQ5wXjowVP6VQZXv5kIaORXHWUsB/view?usp=sharing" target="_blank">Télécharger le PDF</a></p>',
            ctm: '<p>Nothing to show right now.</p>',
            mdf: '<p>Nothing to show right now.</p>',
            rdm: '<p>Nothing to show right now.</p>',
            sm: '<p>Nothing to show right now.</p>',
            mat: '<p>Nothing to show right now.</p>',
            mm: '<p>Nothing to show right now.</p>',
            cao: '<p>SolidWorks 2022 SP0 Full Premium Free Full Activated (14.7 GB) : Cliquez ici pour le <a href="https://s2.pesk.top/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NjcyMjU2MDAsInN1YiI6IkRTLlNvbGlkV29ya3MuMjAyMi5TUDAuUHJlbWl1bS1TU1EgW1Blc2tUb3AuY29tXS5yYXIiLCJzb3VyY2UiOiJodHRwczpcL1wvcGVza3RvcC5jb21cLyJ9.YFfl5Mf0DPV5r3g65msg6wIyYSnro4yiUgwdvjNwfM8" target="_blank">téléchargement direct</a> & consultez les <a href="https://drive.google.com/file/d/1qo39pRdJAdr4qHxKEwXnwkGdMQyc8zwe/view?usp=sharing" target="_blank">instructions ici</a></p>',
            ananum: '<p>Nothing to show right now.</p>',
            tic: '<p>Nothing to show right now.</p>'
        }
    }
};

let currentSemester = null;

// ============ NAVIGATION FUNCTIONS ============

function showCalculator() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('support').style.display = 'none';
    document.getElementById('module').style.display = 'none';
}

function showModuleSection() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('module').style.display = 'block';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'none';
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

// ============ MODULE SECTION FUNCTIONS ============

function selectModuleSemester(semester) {
    currentSemester = semester;
    const data = semesterData[semester];
    
    document.getElementById('semesterSelectionModule').style.display = 'none';
    document.getElementById('moduleContentArea').style.display = 'block';
    document.getElementById('selectedSemesterTitle').innerText = data.name;
    
    // Generate module buttons
    const container = document.getElementById('moduleoptions');
    container.innerHTML = `
        <p><b>Section d'Affichage :</b></p>
        <button onclick="showModuleContent('show')">Affichage</button>
        <p><b>Espace de Rattrapage :</b></p>
        <button onclick="showModuleContent('rat')">Rattrapage</button>
        <p><b>Module :</b></p>
        ${data.modules.map(m => `<button onclick="showModuleContent('${m.id}')">${m.name}</button>`).join('')}
        <p><b>Aller au menu principal :</b></p>
        <button type="button" onclick="goBackToMainMenu()" class="return-button top-return-button">Menu Principal</button>
    `;
}

function backToSemesterSelection() {
    document.getElementById('semesterSelectionModule').style.display = 'flex';
    document.getElementById('moduleContentArea').style.display = 'none';
    document.getElementById('moduleContent').style.display = 'none';
    currentSemester = null;
}

function showModuleContent(moduleId) {
    document.getElementById('moduleoptions').style.display = 'none';
    document.getElementById('moduleContent').style.display = 'block';
    
    const data = semesterData[currentSemester];
    let moduleTitle = '';
    let moduleContent = '';
    
    if (moduleId === 'show') {
        moduleTitle = 'Affichage';
        moduleContent = data.moduleContent.show;
    } else if (moduleId === 'rat') {
        moduleTitle = 'Rattrapage';
        moduleContent = data.moduleContent.rat;
    } else {
        const module = data.modules.find(m => m.id === moduleId);
        moduleTitle = module ? module.name : 'Module';
        moduleContent = data.moduleContent[moduleId] || '<p>Nothing to show right now.</p>';
    }
    
    document.getElementById('moduleContent').innerHTML = `
        <h2>${moduleTitle}</h2>
        ${moduleContent}
        <button type="button" onclick="goBackInModule()" class="return-button top-return-button">Retour</button>
        <button type="button" onclick="goBackToMainMenu()" class="return-button top-return-button">Menu Principal</button>
    `;
}

function goBackInModule() {
    document.getElementById('moduleContent').style.display = 'none';
    document.getElementById('moduleoptions').style.display = 'flex';
}

// ============ CALCULATOR FUNCTIONS ============

function selectCalculatorSemester(semester) {
    currentSemester = semester;
    const data = semesterData[semester];
    
    document.getElementById('semesterSelectionCalculator').style.display = 'none';
    document.getElementById('calculatorContentArea').style.display = 'block';
    
    // Populate module select dropdown
    const moduleSelect = document.getElementById('moduleSelect');
    moduleSelect.innerHTML = data.modules.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
}

function backToCalculatorSemesterSelection() {
    document.getElementById('semesterSelectionCalculator').style.display = 'flex';
    document.getElementById('calculatorContentArea').style.display = 'none';
    document.getElementById('semesterForm').style.display = 'none';
    document.getElementById('moduleForm').style.display = 'none';
    document.getElementById('calculatorOptions').style.display = 'block';
    currentSemester = null;
}

function showSemesterCalculator() {
    document.getElementById('calculatorOptions').style.display = 'none';
    document.getElementById('semesterForm').style.display = 'block';
    document.getElementById('moduleForm').style.display = 'none';
    
    const data = semesterData[currentSemester];
    let formHtml = '<h2>Entrez vos notes</h2>';
    
    data.modules.forEach(module => {
        formHtml += `<div class="module"><h3>${module.name}</h3>`;
        if (module.hasTD) {
            formHtml += `<label for="${module.id}_td">TD:</label>
                        <input type="number" id="${module.id}_td" min="0" max="20" required>`;
        }
        if (module.hasTP) {
            formHtml += `<label for="${module.id}_tp">TP:</label>
                        <input type="number" id="${module.id}_tp" min="0" max="20" required>`;
        }
        if (module.hasExam) {
            formHtml += `<label for="${module.id}_exam">Examen:</label>
                        <input type="number" id="${module.id}_exam" min="0" max="20" required>`;
        }
        formHtml += `</div>`;
    });
    
    formHtml += `<div class="result-container">
                    <button type="button" onclick="calculateAverage()">Calculer la moyenne</button>
                    <p id="result">Votre moyenne du semestre est: <span id="averageResult">0.00</span></p>
                    <button type="button" onclick="goBackToMainMenu()" class="return-button top-return-button">Menu Principal</button>
                </div>`;
    
    document.getElementById('semesterForm').innerHTML = formHtml;
}

function showModuleCalculator() {
    document.getElementById('calculatorOptions').style.display = 'none';
    document.getElementById('moduleForm').style.display = 'block';
    document.getElementById('semesterForm').style.display = 'none';
}

function goBackInCalculator() {
    document.getElementById('semesterForm').style.display = 'none';
    document.getElementById('moduleForm').style.display = 'none';
    document.getElementById('calculatorOptions').style.display = 'block';
}

function calculateAverage() {
    const data = semesterData[currentSemester];
    let totalPoints = 0;
    let totalCoef = 0;
    
    for (const module of data.modules) {
        let note = 0;
        let moduleCoef = 0;
        
        if (module.hasTD) {
            const td = parseFloat(document.getElementById(`${module.id}_td`).value);
            if (isNaN(td)) { alert(`Veuillez remplir la note de TD pour ${module.name}`); return; }
            note += td * module.coeff.td;
            moduleCoef += module.coeff.td;
        }
        if (module.hasTP) {
            const tp = parseFloat(document.getElementById(`${module.id}_tp`).value);
            if (isNaN(tp)) { alert(`Veuillez remplir la note de TP pour ${module.name}`); return; }
            note += tp * module.coeff.tp;
            moduleCoef += module.coeff.tp;
        }
        if (module.hasExam) {
            const exam = parseFloat(document.getElementById(`${module.id}_exam`).value);
            if (isNaN(exam)) { alert(`Veuillez remplir la note d'examen pour ${module.name}`); return; }
            note += exam * module.coeff.exam;
            moduleCoef += module.coeff.exam;
        }
        
        totalPoints += note;
        totalCoef += moduleCoef;
    }
    
    const average = totalPoints / totalCoef;
    document.getElementById('result').innerHTML = `Votre moyenne du semestre est: <span id="averageResult">${average.toFixed(2)}</span>`;
}

function calculateModuleAverage() {
    const data = semesterData[currentSemester];
    const moduleId = document.getElementById('moduleSelect').value;
    const module = data.modules.find(m => m.id === moduleId);
    
    let note = 0;
    let totalCoef = 0;
    
    if (module.hasTD) {
        const td = parseFloat(document.getElementById('module_td').value);
        if (isNaN(td)) { alert('Veuillez remplir la note de TD'); return; }
        note += td * module.coeff.td;
        totalCoef += module.coeff.td;
    }
    if (module.hasTP) {
        const tp = parseFloat(document.getElementById('module_tp').value);
        if (isNaN(tp)) { alert('Veuillez remplir la note de TP'); return; }
        note += tp * module.coeff.tp;
        totalCoef += module.coeff.tp;
    }
    if (module.hasExam) {
        const exam = parseFloat(document.getElementById('module_exam').value);
        if (isNaN(exam)) { alert('Veuillez remplir la note d\'examen'); return; }
        note += exam * module.coeff.exam;
        totalCoef += module.coeff.exam;
    }
    
    const average = note / totalCoef;
    document.getElementById('moduleaverageResult').innerText = average.toFixed(2);
}
