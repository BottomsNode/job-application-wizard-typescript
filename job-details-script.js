"use strict";
let educationCount = 1;
let workExperienceCount = 1;
let referenceCount = 1;
function addEducationRow() {
    educationCount++;
    const educationContainer = document.getElementById('education-container');
    const newEducationRow = document.createElement('div');
    newEducationRow.classList.add('education-row');
    newEducationRow.innerHTML = `
        <div class="education-item">
            <b><label>Course Name</label></b>
            <input type="text" name="course_name_${educationCount}" id="course-name-${educationCount}" />
            <label>University:</label>
            <input type="text" name="university_${educationCount}" id="university-${educationCount}" />
            <label>Passing Year:</label>
            <input type="text" name="passing_year_${educationCount}" id="passing-year-${educationCount}" />
            <label>Percentage:</label>
            <input type="text" name="percentage_${educationCount}" id="percentage-${educationCount}" />
            <button type="button" onclick="removeEducationRow(this)">Delete</button>
        </div>
    `;
    educationContainer.appendChild(newEducationRow);
    const educationCountInput = document.getElementById('educationCount');
    educationCountInput.value = educationCount.toString();
}
function removeEducationRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
function addWorkExperienceRow() {
    workExperienceCount++;
    const workExperienceContainer = document.getElementById('work-experience-container');
    const newRow = document.createElement('div');
    newRow.className = 'work-experience-row';
    newRow.innerHTML = `
        <div class="work-experience-item">
            <b><label>Company Name</label></b>
            <input type="text" name="company_name_${workExperienceCount}" id="company-name-${workExperienceCount}" />
            <label>Designation:</label>
            <input type="text" name="designation_${workExperienceCount}" id="designation-${workExperienceCount}" />
            <label>From:</label>
            <input type="text" name="work_from_${workExperienceCount}" id="work-from-${workExperienceCount}" placeholder="dd-mm-yyyy" />
            <label>To:</label>
            <input type="text" name="work_to_${workExperienceCount}" id="work-to-${workExperienceCount}" placeholder="dd-mm-yyyy" />
            <button type="button" onclick="removeWorkExperienceRow(this)">Delete</button>
        </div>
    `;
    workExperienceContainer.appendChild(newRow);
    const workExperienceCountInput = document.getElementById('workExperienceCount');
    workExperienceCountInput.value = workExperienceCount.toString();
}
function removeWorkExperienceRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
function addReferenceRow() {
    referenceCount++;
    const referenceContainer = document.getElementById('reference-container');
    const newRow = document.createElement('div');
    newRow.className = 'reference-row';
    newRow.innerHTML = `
        <div class="reference-item">
            <b><label>Reference's Name</label></b>
            <input type="text" name="ref_name_${referenceCount}" id="ref-name-${referenceCount}" />
            <label>Reference's Contact</label>
            <input type="text" name="ref_phone_${referenceCount}" id="ref-phone-${referenceCount}" placeholder="write +91-" />
            <label>Reference's Relation</label>
            <input type="text" name="ref_relation_${referenceCount}" id="ref-relation-${referenceCount}" />
            <button type="button" onclick="removeReferenceRow(this)">Delete</button>
        </div>
    `;
    referenceContainer.appendChild(newRow);
    const referenceCountInput = document.getElementById('referenceCount');
    referenceCountInput.value = referenceCount.toString();
}
function removeReferenceRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
function validatePreferences() {
    const noticePeriod = document.getElementById('notice-period-id').value;
    const expectedCTC = document.getElementById('expected-ctc-id').value;
    const currentCTC = document.getElementById('current-ctc-id').value;
    if (!noticePeriod || !expectedCTC || !currentCTC) {
        alert("Please fill in all the fields in the Preferences section.");
        return false;
    }
    return true;
}
document.querySelectorAll('input[name="skill_name[]"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const technologyCount = document.querySelectorAll('input[name="skill_name[]"]:checked').length;
        const technologyCountInput = document.getElementById('technologyCount');
        technologyCountInput.value = technologyCount.toString();
    });
});
document.querySelectorAll('input[name="lang[]"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const languageCount = document.querySelectorAll('input[name="lang[]"]:checked').length;
        const languageCountInput = document.getElementById('languageCount');
        languageCountInput.value = languageCount.toString();
    });
});
document.querySelector('form').addEventListener('submit', (event) => {
    if (!validatePreferences()) {
        event.preventDefault();
    }
});
