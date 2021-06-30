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
var x = 1;
var y = 1;
var z = 1;


var firstNameValue;
var middleNameValue;
var lastNameValue;
var genderValue;
var dateOfBirthValue;
var IDValue;
var educationValue;
var eduInstitutionValue;
var graduationYearValue;
var phoneNumberValue;
var emailValue;
var addressValue;
var maritalStatusValue;
var numberOfKidsValue;
var professionalStatusValue;
var maidenNameValue;
var otherContactsValue;
var spouseNameValue;
var spouseSurnameValue;
var qualification;
var qualificationValue;
var degree;
var moreQualifications = [];
var moreQualificationsValue = [];
var degreeValue;
var kidsName = [];
var kidsSurname = [];
var kidsNameValue = [];
var kidsSurnameValue = [];
var studyCycle;
var course;
var studyInstitution;
var expectedGraduation;
var studyCycleValue;
var courseValue;
var studyInstitutionValue;
var expectedGraduationValue;
var workInstitution;
var position;
var experience;
var workingScope;
var workingField;
var workInstitutionValue;
var positionValue;
var experienceValue;
var workingScopeValue;
var workingFieldValue;
var unemploymentReasons;
var unemploymentReasonsValue;
var expectedEndOfParentalLeave;
var expectedEndOfParentalLeaveValue;
var personalInformation;
var spouseName;
var spouseSurname;

form.addEventListener('submit', e=>{
    e.preventDefault();

    checkInputs();
});


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


  $("#kid0surname").keyup(function(){
    update();
});

function update() {
    
  $("#kid1surname").val($('#kid0surname').val());
}



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

  $(add_button_Voc).click(function(e) {
      e.preventDefault();
      if (x < max_fields) {
          $(wrapper_Voc).append('<div class="form-control"><label for="qualification' + x + '">Another qualification:</label><input type="text" id="qualification' + x + '" placeholder="Informatics"><i class="fas fa-check-circle"></i><i class="fas fa-exclamation-circle"></i><small>Error message</small></div>'); //add input box
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
        $(wrapper_College).append('<div class="form-control"><label for="qualification' + y + '">Another qualification:</label><input type="text" id="qualification' + y + '" placeholder="Informatics"><i class="fas fa-check-circle"></i><i class="fas fa-exclamation-circle"></i><small>Error message</small></div>'); //add input box
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
        $(wrapper_Uni).append('<div class="form-control"><label for="qualification' + z + '">Another qualification:</label><input type="text" id="qualification' + z + '" placeholder="Informatics"><i class="fas fa-check-circle"></i><i class="fas fa-exclamation-circle"></i><small>Error message</small></div>'); //add input box
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

function update() {
    for(let i = 0; i < numberOfKids.value; i++){
        $("#kid" + i + "surname").val($('#kid0surname').val());
    }
  }

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
        let label1 = document.createElement('label');
        let input1 = document.createElement("input");
        let i11 = document.createElement('i')
        let i12 = document.createElement('i')
        let i21 = document.createElement('i')
        let i22 = document.createElement('i')
        let small1 = document.createElement('small')
        let small2 = document.createElement('small')
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        div1.setAttribute("class", "form-control")
        div2.setAttribute("class", "form-control")
        i11.setAttribute("class", "fas fa-check-circle")
        i12.setAttribute("class", "fas fa-exclamation-circle")
        i21.setAttribute("class", "fas fa-check-circle")
        i22.setAttribute("class", "fas fa-exclamation-circle")
        small1.innerHTML = "Error message"
        small2.innerHTML = "Error message"

        input1.type = "text";
        input1.id = "kid" + i + "name";

        label1.setAttribute("for", input1.id)
        label1.innerHTML = "Kid's " + (i + 1) + " name:";
        div1.appendChild(label1);
        div1.appendChild(input1);
        div1.appendChild(i11);
        div1.appendChild(i12);
        div1.appendChild(small1);

        var label2 = document.createElement("label");
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.id = "kid" + i + "surname";

        label2.setAttribute("for", input2.id)
        label2.innerHTML = "Kid's " + (i + 1) + " surname:";
        div2.appendChild(label2);
        div2.appendChild(input2);
        div2.appendChild(i21);
        div2.appendChild(i22);
        div2.appendChild(small2);

        container1.appendChild(div1);

        container1.appendChild(div2);
        $("#kid0surname").keyup(function(){
            update();
        });
    }
}
var counter;
function checkInputs(){
    counter = 0;
    firstNameValue = firstName.value.trim();
    middleNameValue = middleName.value.trim();
    lastNameValue = lastName.value.trim();
    genderValue = gender.options[gender.selectedIndex].text;
    dateOfBirthValue = dateOfBirth.value;
    IDValue = ID.value.trim();
    educationValue = education.options[education.selectedIndex].text;
    eduInstitutionValue = eduInstitution.value.trim();
    graduationYearValue = graduationYear.value;
    phoneNumberValue = phoneNumber.value.trim();
    emailValue = email.value.trim();
    addressValue = address.value.trim();
    maritalStatusValue = maritalStatus.options[maritalStatus.selectedIndex].text;
    numberOfKidsValue = numberOfKids.value;
    professionalStatusValue = professionalStatus.options[professionalStatus.selectedIndex].text;
    maidenNameValue = maidenName.value.trim();
    otherContactsValue = otherContacts.value.trim();
    
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
        qualification = document.getElementById('qualificationV');
        qualificationValue = qualification.value.trim();
        degree = document.getElementById('degreeV')
        if(qualificationValue === ''){
            setErrorFor(qualification, 'Qualification cannot be blank');
            
        } else{
            setSuccessFor(qualification);
        }

        for (let i = 0; i < x - 1; i++){
            moreQualifications[i] = document.getElementById('qualification' + (i+1));
            moreQualificationsValue[i] = moreQualifications[i].value.trim();
            if(moreQualificationsValue[i] === ''){
                setErrorFor(moreQualifications[i], 'Qualification cannot be blank');
                
            } else{
                setSuccessFor(moreQualifications[i]);
            }
        }

        setSuccessFor(degree);

    } else if(eduVisibility1 !== 'none'){
        degree = document.getElementById('degreeU')
        qualification = document.getElementById('qualificationU');
        qualificationValue = qualification.value.trim();
        degreeValue = degree.options[degree.selectedIndex].text;
        if(qualificationValue === ''){
            setErrorFor(qualification, 'Qualification cannot be blank');
            
        } else{
            setSuccessFor(qualification);
        }

        moreQualifications = [];
        moreQualificationsValue = [];
        for (let i = 0; i < z - 1; i++){
            moreQualifications[i] = document.getElementById('qualification' + (i+1));
            moreQualificationsValue[i] = moreQualifications[i].value.trim();
            if(moreQualificationsValue[i] === ''){
                setErrorFor(moreQualifications[i], 'Qualification cannot be blank');
                
            } else{
                setSuccessFor(moreQualifications[i]);
            }
        }

        if(degreeValue === 'Degree'){
            setErrorFor(degree, 'Qualification cannot be blank');
            
        } else{
            setSuccessFor(degree);
        }
    } else if(eduVisibility2 !== 'none'){
        degree = document.getElementById('degreeC')
        qualification = document.getElementById('qualificationC');
        qualificationValue = qualification.value.trim();
        if(qualificationValue === ''){
            setErrorFor(qualification, 'Qualification cannot be blank');
            
        } else{
            setSuccessFor(qualification);
        }

        moreQualifications = [];
        moreQualificationsValue = [];
        for (let i = 0; i < y - 1; i++){
            moreQualifications[i] = document.getElementById('qualification' + (i+1));
            moreQualificationsValue[i] = moreQualifications[i].value.trim();
            if(moreQualificationsValue[i] === ''){
                setErrorFor(moreQualifications[i], 'Qualification cannot be blank');
                
            } else{
                setSuccessFor(moreQualifications[i]);
            }
        }

        setSuccessFor(degree);
    }
    if(phoneNumberValue === ''){
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
        
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

    if(maritalStatusValue == 'Married'){
        spouseName = document.getElementById('spouse-name')
        spouseSurname = document.getElementById('spouse-surname')

        spouseNameValue = spouseName.value.trim();
        spouseSurnameValue = spouseSurname.value.trim();

        if(spouseNameValue === ''){
            setErrorFor(spouseName, "Spouse's name cannot be blank");
            
        } else{
            setSuccessFor(spouseName);
        }
        if(spouseSurnameValue === ''){
            setErrorFor(spouseSurname, "Spouse's surname cannot be blank");
            
        } else{
            setSuccessFor(spouseSurname);
        }
    }

    if(numberOfKidsValue === ''){
        setErrorFor(numberOfKids, 'Number of kids cannot be blank');
        
    } else{
        setSuccessFor(numberOfKids);
    }


    for (let i = 0; i < numberOfKidsValue; i++){
        kidsName[i] = document.getElementById('kid' + i + 'name');
        kidsSurname[i] = document.getElementById('kid' + i + 'surname');
        kidsNameValue[i] = kidsName[i].value.trim();
        kidsSurnameValue[i] = kidsSurname[i].value.trim();

        if(kidsNameValue[i] === ''){
            setErrorFor(kidsName[i], "Kid's name cannot be blank");
            
        } else{
            setSuccessFor(kidsName[i]);
        }
        if(kidsSurnameValue[i] === ''){
            setErrorFor(kidsSurname[i], "Kid's surname cannot be blank");
            
        } else{
            setSuccessFor(kidsSurname[i]);
        }
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
        expectedEndOfParentalLeave = document.getElementById('expected-end');
        expectedEndOfParentalLeaveValue = expectedEndOfParentalLeave.value;
        if(expectedEndOfParentalLeaveValue === ''){
            setErrorFor(expectedEndOfParentalLeave, 'Expected end of parental leave cannot be blank');
            
        } else{
            setSuccessFor(expectedEndOfParentalLeave);
        }
    } else if(proVisibility2 !== 'none'){
        studyCycle = document.getElementById('study-cycle');
        course = document.getElementById('course');
        studyInstitution = document.getElementById('studies-institution');
        expectedGraduation = document.getElementById('expected-graduation-date');

        studyCycleValue = studyCycle.value.trim();
        courseValue = course.value;
        studyInstitutionValue = studyInstitution.value.trim();
        expectedGraduationValue = expectedGraduation.value;

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
        workInstitution = document.getElementById('work-institution');
        position = document.getElementById('position');
        experience = document.getElementById('experience');
        workingScope = document.getElementById('working-scope');
        workingField = document.getElementById('working-field');

        workInstitutionValue = workInstitution.value.trim();
        positionValue = position.value.trim();
        experienceValue = experience.value;
        workingScopeValue = workingScope.options[workingScope.selectedIndex].text;
        workingFieldValue = workingField.options[workingField.selectedIndex].text;

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
        unemploymentReasons = document.getElementById('reasons');

        unemploymentReasonsValue = unemploymentReasons.value.trim();

        if(unemploymentReasonsValue === ''){
            setErrorFor(unemploymentReasons, 'Reasons of unemployment cannot be blank');
            
        } else{
            setSuccessFor(unemploymentReasons);
        }
    }

    if(counter === 0){
        personalInformation = {
        fName: firstNameValue,
        midName: middleNameValue,
        lName: lastNameValue,
        MaidenName: maidenNameValue,
        Gender: genderValue,
        Birthday: dateOfBirthValue,
        IdentificationNumber: IDValue,
    
        Education: educationValue,
        EducationInstitution: eduInstitutionValue,
        Graduationyears: graduationYearValue,
        Qualification: qualificationValue,
        otherQualifications: moreQualificationsValue,
        Degree: degreeValue,
    
        phoneNr: phoneNumberValue,
        EmailAddress: emailValue,
        HomeAddress: addressValue,
        OtherContacts: otherContactsValue,
    
        Marriage: maritalStatusValue,
        SpouseName: spouseNameValue,
        SpouseSurname: spouseSurnameValue,
        Children: numberOfKidsValue,
        KidsNames: kidsNameValue,
        KidsSurnames: kidsSurnameValue,
    
        ProfessionalStatus: professionalStatusValue,
        StudyCycle: studyCycleValue,
        Couse: courseValue,
        StudyInstitution: studyInstitutionValue,
        ExpectedGraduationDate: expectedGraduationValue,
        WorkInstitution: workInstitutionValue,
        Position: positionValue,
        WorkingExperience: experienceValue,
        WorkingScope: workingScopeValue,
        WorkingField: workingFieldValue,
        ReasonsOfUnemployment: unemploymentReasonsValue,
        ExpectedEndOfParentalLeaveDate: expectedEndOfParentalLeaveValue
      };
    }
    console.table(personalInformation)

}
function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    small.innerText = message;
    counter++;
}
function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}

