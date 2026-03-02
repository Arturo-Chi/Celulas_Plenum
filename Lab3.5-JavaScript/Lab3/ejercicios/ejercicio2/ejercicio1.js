
        const d = document,
        $main = d.querySelector(".container")
        //console.log(new XMLHttpRequest())

        const getHtml = (options)=>{
            let {url, success, error} = options
            const xhr = new XMLHttpRequest()

            xhr.addEventListener("readystatechange", e=>{
               if (xhr.readyState !== 4) return;

               if(xhr.status >= 200 && xhr.status <300){
                    let html = xhr.responseText
                    success(html)
               }else{
                    let message = xhr.statusText || "Ocurrió un Error"
                    error(message)
               }
            });
            xhr.open("GET", url)
            xhr.setRequestHeader("Content-type","text/html; charset=utf-8")
            xhr.send()
        }

        d.addEventListener("DOMContentLoaded", e=>{
            let options = {
                url: "assets/home.html",
                success: (html) => $main.innerHTML = html,
                error: (error)=> $main.innerHTML = `<h1>${error}</h1>`
            }
            getHtml(options);
        });

        d.addEventListener("click", e=>{
            if(e.target.matches(".menu a")){
                e.preventDefault();
                //console.log(e.target.href)
                getHtml({
                    url: e.target.href,
                    success: (html) => $main.innerHTML = html,
                    error: (err) => $main.innerHTML = `<h1>${err}</h1>`
                })
            }
        })