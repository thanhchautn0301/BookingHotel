
const inputElement = document.getElementById('input-province');
const boxListProvince = document.getElementById('list-province');
const deleteIcon = document.getElementById('filter-hotel');
inputElement.addEventListener('click', function(e){
    e.stopPropagation();
    boxListProvince.classList.add('active');
    console.log('Input click');
})

boxListProvince.addEventListener('click',function(e2){
    e2.stopPropagation();
    var province = e2.target.getAttribute('data-province');
    inputElement.value = province;
    deleteIcon.classList.remove('d-none');
    console.log('Li Click: ' + province + 'Li: ' + e2.target);
    boxListProvince.classList.remove('active');
   
})

document.addEventListener('click',function(e3){
    if(boxListProvince.classList.contains('active')){
    boxListProvince.classList.remove('active');
    }
})

deleteIcon.addEventListener('click',function(e4){
    e4.stopPropagation();
    inputElement.value = '';
    deleteIcon.classList.add('d-none');
})
