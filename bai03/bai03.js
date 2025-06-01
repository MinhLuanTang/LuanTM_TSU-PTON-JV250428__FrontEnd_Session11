let so;  
while(true){
    so = Number(prompt('Nhap vao mot so tu 0 den 9: '))
    if( so <= 9 && so >= 0 ){
        break;
    }
    else
    {alert('Vui long chi nhap so tu 0 den 9!')}
}
switch(so){
    case 0:
        alert('So khong');
        break;
    case 1:
        alert('So mot');
        break;
    case 2:
        alert('So hai');
        break;
    case 3:
        alert('So ba');
        break;
    case 4:
        alert('So bon');
        break;
    case 5:
        alert('So nam');
        break;
    case 6:
        alert('So sau');
        break;
    case 7:
        alert('So bay');
        break;
    case 8:
        alert('So tam');
        break;
    case 9:
        alert('So chin');
        break; 
    default:
        alert('So nhap vao khong nam trong khoang tu 0 den 9 !');   
        break;     
}