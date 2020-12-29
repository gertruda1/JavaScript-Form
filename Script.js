const form = document.getElementById('form')
const firstName = document.getElementById('fName')
const middleName = document.getElementById('midName')
const lastName = document.getElementById('lName')
const maidenName = document.getElementById('maidenName')
const gender = document.getElementById('gender')
const dateOfBirth = document.getElementById('dateOfBirth')
const ID = document.getElementById('ID')
const education = document.getElementById('education')
const eduInstitution = document.getElementById('institution')
const graduationYear = document.getElementById('graduation-year')
const phoneNumber = document.getElementById('phone-number')
const email = document.getElementById('email')
const otherContacts = document.getElementById('other_contacts')
const address = document.getElementById('address')
const maritalStatus = document.getElementById('marital-status')
const numberOfKids = document.getElementById('number-of-kids')
const professionalStatus = document.getElementById('professional-status')

form.addEventListener('submit', e=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const middleNameValue = middleName.value.trim();
    const lastNameValue = lastName.value.trim();
    const genderValue = gender.options[gender.selectedIndex].text;
    const dateOfBirthValue = dateOfBirth.value;
    const IDValue = ID.value.trim();
    const educationValue = education.options[education.selectedIndex].text;
    const eduInstitutionValue = eduInstitution.value.trim();
    const graduationYearValue = graduationYear.value;
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const maritalStatusValue = maritalStatus.options[maritalStatus.selectedIndex].text;
    const numberOfKidsValue = numberOfKids.value;
    const professionalStatusValue = professionalStatus.options[professionalStatus.selectedIndex].text
    
    if(firstNameValue === ''){
        setErrorFor(firstName, 'First name cannot be blank');
    } else{
        setSuccessFor(firstName);
    }
    if(middleNameValue === ''){
        setErrorFor(middleName, 'Middle name cannot be blank');
    } else{
        setSuccessFor(middleName);
    }
    if(lastNameValue === ''){
        setErrorFor(lastName, 'Last name cannot be blank');
    } else{
        setSuccessFor(lastName);
    }
    if(genderValue === 'Gender'){
        setErrorFor(gender, 'Please select your gender');
    } else{
        setSuccessFor(gender);
    }
    if(dateOfBirthValue === ''){
        setErrorFor(dateOfBirth, 'Date of birth cannot be blank');
    } else{
        setSuccessFor(dateOfBirth);
    }
    if(IDValue === ''){
        setErrorFor(ID, 'National identification number cannot be blank');
    } else{
        setSuccessFor(ID);
    }
    if(educationValue === 'Education'){
        setErrorFor(education, 'Please select your education');
    } else{
        setSuccessFor(education);
    }
    if(eduInstitutionValue === ''){
        setErrorFor(eduInstitution, 'Last successfully finished educational institution cannot be blank');
    } else{
        setSuccessFor(eduInstitution);
    }
    if(graduationYearValue === ''){
        setErrorFor(graduationYear, 'Graduation years cannot be blank');
    } else{
        setSuccessFor(graduationYear);
    }
    var eduVisibility1 = document.getElementById("ifHigherUni").style.display;
    var eduVisibility2 = document.getElementById("ifHigherCollege").style.display;
    var eduVisibility3 = document.getElementById("ifVocational").style.display;

    if(eduVisibility3 !== 'none'){
        const qualification = document.getElementById('qualificationV');
        const qualificationValue = qualification.value.trim();
        const degree = document.getElementById('degreeV')
        if(qualificationValue === ''){
            setErrorFor(qualification, 'Qualification cannot be blank');
        } else{
            setSuccessFor(qualification);
        }
        setSuccessFor(degree);
    } else if(eduVisibility1 !== 'none'){
        const degree = document.getElementById('degreeU')
        const qualification = document.getElementById('qualificationU');
        const qualificationValue = qualification.value.trim();
        const degreeValue = degree.options[degree.selectedIndex].text;
        if(qualificationValue === ''){
            setErrorFor(qualification, 'Qualification cannot be blank');
        } else{
            setSuccessFor(qualification);
        }
        if(degreeValue === 'Degree'){
            setErrorFor(degree, 'Qualification cannot be blank');
        } else{
            setSuccessFor(degree);
        }
    } else if(eduVisibility2 !== 'none'){
        const degree = document.getElementById('degreeC')
        const qualification = document.getElementById('qualificationC');
        const qualificationValue = qualification.value.trim();
        if(qualificationValue === ''){
            setErrorFor(qualification, 'Qualification cannot be blank');
        } else{
            setSuccessFor(qualification);
        }
        setSuccessFor(degree);
    }
    if(phoneNumberValue === ''){
        setErrorFor(phoneNumber, 'Please');
    } else{
        setSuccessFor(phoneNumber);
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email address cannot be blank');
    } else{
        setSuccessFor(email);
    }
    if(addressValue === ''){
        setErrorFor(address, 'Home address cannot be blank');
    } else{
        setSuccessFor(address);
    }

    if(maritalStatusValue === 'Marital status'){
        setErrorFor(maritalStatus, 'Please choose your marital status');
    } else{
        setSuccessFor(maritalStatus);
    }
    if(numberOfKidsValue === ''){
        setErrorFor(numberOfKids, 'Number of kids cannot be blank');
    } else{
        setSuccessFor(numberOfKids);
    }
    if(professionalStatusValue=== 'Professional status'){
        setErrorFor(professionalStatus, 'Please select your professional status');
    } else{
        setSuccessFor(professionalStatus);
    }

    var proVisibility1 = document.getElementById("ifParentalLeave").style.display;
    var proVisibility2 = document.getElementById("ifStudying").style.display;
    var proVisibility3 = document.getElementById("ifWorking").style.display;
    var proVisibility4 = document.getElementById("ifNotWorking").style.display;

    if(proVisibility1 !== 'none'){
        const expectedEndOfParentalLeave = document.getElementById('expected-end');
        const expectedEndOfParentalLeaveValue = expectedEndOfParentalLeave.value;
        if(expectedEndOfParentalLeaveValue === ''){
            setErrorFor(expectedEndOfParentalLeave, 'Expected end of parental leave cannot be blank');
        } else{
            setSuccessFor(expectedEndOfParentalLeave);
        }
    } else if(proVisibility2 !== 'none'){
        const studyCycle = document.getElementById('study-cycle');
        const course = document.getElementById('course');
        const studyInstitution = document.getElementById('studies-institution');
        const expectedGraduation = document.getElementById('expected-graduation-date');

        const studyCycleValue = studyCycle.value.trim();
        const courseValue = course.value;
        const studyInstitutionValue = studyInstitution.value.trim();
        const expectedGraduationValue = expectedGraduation.value;

        if(studyCycleValue === ''){
            setErrorFor(studyCycle, 'Qualification cannot be blank');
        } else{
            setSuccessFor(studyCycle);
        }
        if(courseValue === ''){
            setErrorFor(course, 'Course cannot be blank');
        } else{
            setSuccessFor(course);
        }
        if(studyInstitutionValue === ''){
            setErrorFor(studyInstitution, 'Study institution cannot be blank');
        } else{
            setSuccessFor(studyInstitution);
        }
        if(expectedGraduationValue === ''){
            setErrorFor(expectedGraduation, 'Expected graduation date cannot be blank');
        } else{
            setSuccessFor(expectedGraduation);
        }
    } else if(proVisibility3 !== 'none'){
        const workInstitution = document.getElementById('work-institution');
        const position = document.getElementById('position');
        const experience = document.getElementById('experience');
        const workingScope = document.getElementById('working-scope');
        const workingField = document.getElementById('working-field');

        const workInstitutionValue = workInstitution.value.trim();
        const positionValue = position.value.trim();
        const experienceValue = experience.value;
        const workingScopeValue = workingScope.options[workingScope.selectedIndex].text;
        const workingFieldValue = workingField.options[workingField.selectedIndex].text;

        if(workInstitutionValue === ''){
            setErrorFor(workInstitution, 'Work institution cannot be blank');
        } else{
            setSuccessFor(workInstitution);
        }
        if(positionValue === ''){
            setErrorFor(position, 'Position cannot be blank');
        } else{
            setSuccessFor(position);
        }
        if(experienceValue === ''){
            setErrorFor(experience, 'Experience cannot be blank');
        } else{
            setSuccessFor(experience);
        }
        if(workingScopeValue === 'Working scope'){
            setErrorFor(workingScope, 'Please select your working scope');
        } else{
            setSuccessFor(workingScope);
        }
        if(workingFieldValue === 'Working field'){
            setErrorFor(workingField, 'Please select your working field');
        } else{
            setSuccessFor(workingField);
        }
    } else if(proVisibility4 !== 'none'){
        const unemploymentReasons = document.getElementById('reasons');

        const unemploymentReasonsValue = unemploymentReasons.value.trim();

        if(unemploymentReasonsValue === ''){
            setErrorFor(unemploymentReasons, 'Reasons of unemployment cannot be blank');
        } else{
            setSuccessFor(unemploymentReasons);
        }
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

$(document).ready(function() 
{
  $('#education').on('change.ifHigherUni', function() 
  {
    $("#ifHigherUni").toggle($(this).val() == 'Higher-uni');
  }).trigger('change.ifHigherUni');

  $('#education').on('change.ifVocational', function() 
  {
    $("#ifVocational").toggle($(this).val() == 'Vocational' );
  }).trigger('change.ifVocational');

  $('#education').on('change.ifHigherCollege', function() 
  {
    $("#ifHigherCollege").toggle($(this).val() == 'Higher-college' );
  }).trigger('change.ifHigherCollege');

  $('#marital-status').on('change.ifMarried', function() 
  {
    $("#ifMarried").toggle($(this).val() == 'married' );
  }).trigger('change.ifMarried');

  $('#professional-status').on('change.ifStudying', function() 
  {
    $("#ifStudying").toggle($(this).val() == 'studying' );
  }).trigger('change.ifStudying');

  $('#professional-status').on('change.ifWorking', function() 
  {
    $("#ifWorking").toggle($(this).val() == 'working' );
  }).trigger('change.ifWorking');

  $('#professional-status').on('change.ifNotWorking', function() 
  {
    $("#ifNotWorking").toggle($(this).val() == 'not-working' );
  }).trigger('change.ifNotWorking');

  $('#professional-status').on('change.ifParentalLeave', function() 
  {
    $("#ifParentalLeave").toggle($(this).val() == 'parental leave' );
  }).trigger('change.ifParentalLeave');



  var max_fields = 5;
  var wrapper_Voc = $(".appending_div_3");
  var add_button_Voc = $(".addVoc");
  var remove_button_Voc = $(".removeVoc")
  var wrapper_College = $(".appending_div_2");
  var add_button_College = $(".addCollege");
  var remove_button_College = $(".removeCollege")
  var wrapper_Uni = $(".appending_div_1");
  var add_button_Uni = $(".addUni");
  var remove_button_Uni = $(".removeUni")
  var min_fields = 1

  var x = 1;
  var y = 1;
  var z = 1;
  $(add_button_Voc).click(function(e) {
      e.preventDefault();
      if (x < max_fields) {
          $(wrapper_Voc).append('<div class="form-control"><input type="text" id="qualification' + x + '" placeholder="Informatics"><i class="fas fa-check-circle"></i><i class="fas fa-exclamation-circle"></i><small>Error message</small></div>'); //add input box
          x++;
        } else {
          alert('You Reached the limits')
      }
  });

  $(remove_button_Voc).click(function(e) {
      e.preventDefault();
      if(x > min_fields)
      {
          $(wrapper_Voc).children().last().remove();
          x--;
      } else{
          alert('You Reached the limits')
      }
      
  });

  $(add_button_College).click(function(e) {
    e.preventDefault();
    if (y < max_fields) {
        $(wrapper_College).append('<div class="form-control"><input type="text" id="qualification' + y + '" placeholder="Informatics"><i class="fas fa-check-circle"></i><i class="fas fa-exclamation-circle"></i><small>Error message</small></div>'); //add input box
        y++;
      } else {
        alert('You Reached the limits')
    }
});

$(remove_button_College).click(function(e) {
    e.preventDefault();
    if(y > min_fields)
    {
        $(wrapper_College).children().last().remove();
        y--;
    } else{
        alert('You Reached the limits')
    }
    
});

$(add_button_Uni).click(function(e) {
    e.preventDefault();
    if (z < max_fields) {
        $(wrapper_Uni).append('<div class="form-control"><input type="text" id="qualification' + z + '" placeholder="Informatics"><i class="fas fa-check-circle"></i><i class="fas fa-exclamation-circle"></i><small>Error message</small></div>'); //add input box
        z++;
      } else {
        alert('You Reached the limits')
    }
});

$(remove_button_Uni).click(function(e) {
    e.preventDefault();
    if(z > min_fields)
    {
        $(wrapper_Uni).children().last().remove();
        z--;
    } else{
        alert('You Reached the limits')
    }
    
});

});

function addFields(){
    // Number of inputs to create
    var number = document.getElementById("number-of-kids").value;
    // Container <div> where dynamic content will be placed
    var container1 = document.getElementById("appending_div_2");
    // Clear previous contents of the container
    while (container1.hasChildNodes()) {
        container1.removeChild(container1.lastChild);
    }
   

    for (i=0;i<number;i++){
        var label1 = document.createElement('label');
        var input1 = document.createElement("input");
        var i1 = document.createElement('i')
        var i2 = document.createElement('i')
        var small = document.createElement('small')
        var div1 = document.createElement("div")
        var div2 = document.createElement("div")
        div1.setAttribute("class", "form-control")
        div2.setAttribute("class", "form-control")
        i1.setAttribute("class", "fas fa-check-circle")
        i2.setAttribute("class", "fas fa-exclamation-circle")
        small.innerHTML = "Error message"

        input1.type = "text";
        input1.id = "kid" + i + "name";

        label1.setAttribute("for", input1.id)
        label1.innerHTML = "Kid's " + (i + 1) + " name:";
        div1.appendChild(label1);
        div1.appendChild(input1);
        div1.appendChild(i1);
        div1.appendChild(i2);
        div1.appendChild(small);

        var label2 = document.createElement("label");
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.id = "kid" + i + "surname";

        label2.setAttribute("for", input2.id)
        label2.innerHTML = "Kid's " + (i + 1) + " surname:";
        div2.appendChild(label2);
        div2.appendChild(input2);
        div2.appendChild(i1);
        div2.appendChild(i2);
        div2.appendChild(small);

        container1.appendChild(div1);

        container1.appendChild(div2);
    }
}
