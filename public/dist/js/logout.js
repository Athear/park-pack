const logout=async()=>{const a=await fetch("/api/users/logout",{method:"POST",headers:{"Content-Type":"application/json"}});a.ok?document.location.replace("/login"):sweetAlert.fire({title:"Logout unsuccessful",text:a.statusText,icon:"warning"})};document.querySelector("#logout").addEventListener("click",logout);