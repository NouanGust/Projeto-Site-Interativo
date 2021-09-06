function consultar(){
    var rota = document.getElementsByName('rota')
    var res = document.querySelector('div#res')
    var cam1 = document.querySelector('img.cam1')
    var cam2 = document.querySelector('img.cam2')
    var cam3 = document.querySelector('img.cam3')
    var cam4 = document.querySelector('img.cam4')
    var link1 = document.querySelector('a.link1')
    var link2 = document.querySelector('a.link2')
    var link3 = document.querySelector('a.link3')
    var link4 = document.querySelector('a.link4')
    if(rota[0].checked){
        //Topo
        cam1.setAttribute('src', 'assets/topo1.png')
        link1.setAttribute('href', 'http://www.op.gg/champion/quinn/statistics/top/build')

        cam2.setAttribute('src', 'assets/topo2.png')
        link2.setAttribute('href', 'http://www.op.gg/champion/cassiopeia/statistics/top/build')

        cam3.setAttribute('src', 'assets/topo3.png')
        link3.setAttribute('href', 'https://www.op.gg/champion/heimerdinger/statistics/top/build')

        cam4.setAttribute('src', 'assets/topo4.png')
        link4.setAttribute('href', 'https://www.op.gg/champion/sion/statistics/top/build' )

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