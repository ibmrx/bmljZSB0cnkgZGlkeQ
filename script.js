function showCalculator() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('support').style.display = 'none';
}

function goToElearning() {
    window.location.href = 'http://elearning.univ-bejaia.dz';
}

function showSupport() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'block';
}

function goBack() {
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('support').style.display = 'none';

    document.getElementById('options').style.display = 'block';
}

function calculateAverage() {
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
