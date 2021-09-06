function consultar(){
    var rota = document.getElementsByName('rota')
    var res = document.querySelector('div#res')
    var cam1 = document.querySelector('img.cam1')
    var cam2 = document.querySelector('img.cam2')
    var cam3 = document.querySelector('img.cam3')
    var cam4 = document.querySelector('img.cam4')
    var link1 = document.querySelector('a.link1')
    var link2 = document.querySelector('a.link2')
    if(rota[0].checked){
        //Topo
        cam1.setAttribute('src', 'topo1.jpg')
        link1.setAttribute('href', 'http://www.op.gg/champion/quinn/statistics/top/build')
        cam2.setAttribute('src', 'topo2.png')
        link2.setAttribute('href', 'http://www.op.gg/champion/cassiopeia/statistics/top/build')
        cam3.setAttribute('src', 'final.png')
        cam4.setAttribute('src', 'final.png')

    }else if(rota[1].checked){
        //Caçador
    }else if(rota[2].checked){
        //Meio
    }else if(rota[3].checked){
        //Atirador
    }else{
        //Suporte
    }

    
}