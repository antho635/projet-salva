const content = [{
        title: 'standart',
        description: 'La formule de base.',
        keywords: [
            'je déménage',
            'j emmenage',
            'sans soucis'
        ],
        preview: 'https://s1.qwant.com/thumbr/0x0/2/6/170633bc1689910ff2505fbd4471934535e6f4ef308c4a42b3abf69d08d7bf/formule-standard-demenagement.jpg?u=https%3A%2F%2Fmlzowygfbczj.i.optimole.com%2F-tfuV0w-1qkKk5ek%2Fw%3Aauto%2Fh%3Aauto%2Fq%3A98%2Fhttps%3A%2F%2Fwww.devisdemenagement-paris.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fformule-standard-demenagement.jpg&q=0&b=1&p=0&a=1'
    },
    {
        title: 'premium',
        description: 'La formule sans soucis.',
        keywords: [
            'je déménage',
            'j emmenage',
            'clefs en main'
        ],
        preview: 'https://s1.qwant.com/thumbr/700x0/9/d/12c89325a3b8724b1604efed649b03b3cce45bb58a11fa5e1c77ce2c88d292/formule-luxe.jpg?u=http%3A%2F%2Ffigaro-demenagement.com%2Fsites%2Fdefault%2Ffiles%2Fformule-luxe.jpg&q=0&b=1&p=0&a=1'
    }
]

function render() {
    let root = document.getElementById('root');

    for (i = 0; i < content.length; i++) {

        let keywords = '';
        for (x = 0; x < content[i].keywords.length; x++) {
            keywords += `
        <a href="#" class="keyword">
          #${ content[i].keywords[x] }
        </a>
        `;
        }

        root.innerHTML += `
      <div class="item">
        <span class="title">
          ${ content[i].title }
        </span>

        <span class="description">
          ${ content[i].description }
        </span>

        <div class="image"
          style="background-image: url(${ content[i].preview }?auto=compress&cs=tinysrgb&dpr=2&h=190&w=260)">
        </div>

        <span class="keywords">
          ${ keywords }
        </span>
      </div>
    `;
    }
}

render();