function validate()
{
    
    if(document.forms["register"]["firstname"].value=="")
    {
        alert("please provide your first name");
        
        return false;
    }
    if(document.forms["register"]["lastname"].value=="")
    {
        alert("please provide your last name");
        
        return false;
    }
    if(document.forms["register"]["password"].value.length<=8)
    {
        alert("too small password");
        
        return false;
    }
    
    

}