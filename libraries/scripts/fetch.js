    'use strict';

    const consoleA = 499.99;
    const consoleB = 399.99;     
    let consoleA_sold = 8650000;
    let consoleB_sold = 8650000;
    let earnings = 0;     

    function console_type(){
        let typeOut = document.createElement('p');
        let typeTxt = document.createElement('p');
        let devices = document.getElementById('type_in').value.toUpperCase();
        if (devices === 'PS5 DISC EDITION') {
            earnings = consoleA * consoleA_sold;
            typeOut.textContent = 'USD $' + earnings.toLocaleString('en-US', {maximumFractionDigits:2});
            typeTxt.textContent = 'Worldwide earnings by the PS5 Disc Edition.';
            document.body.children[1].children[0].children[0].children[2].appendChild(typeOut).setAttribute('id','amt-con-a');
            document.body.children[1].children[0].children[0].children[2].appendChild(typeTxt).setAttribute('id','dsc-con-a');
            console.log('Earnings -> PS5 Disc Console');
            more_data();
        }
        else if (devices === 'PS5 DIGITAL EDITION') {
            earnings = consoleB * consoleB_sold;
            typeOut.textContent = 'USD $' + earnings.toLocaleString('en-US', {maximumFractionDigits:2});
            typeTxt.textContent = 'Worldwide earnings by the PS5 Digital Edition.';
            document.body.children[1].children[0].children[0].children[2].appendChild(typeOut).setAttribute('id','amt-con-b');
            document.body.children[1].children[0].children[0].children[2].appendChild(typeTxt).setAttribute('id','dsc-con-b');
            console.log('Earnings -> PS5 Digital Console');
            more_data();
        }
        else if (devices === 'PS5 CONSOLES') {
            earnings = (consoleA * consoleA_sold) + (consoleB * consoleB_sold);
            typeOut.textContent = 'USD $' + earnings.toLocaleString('en-US', {maximumFractionDigits:2});
            typeTxt.textContent = 'Worldwide earnings by the PS5 consoles.';
            document.body.children[1].children[0].children[0].children[2].appendChild(typeOut).setAttribute('id','amt-con-c');
            document.body.children[1].children[0].children[0].children[2].appendChild(typeTxt).setAttribute('id','dsc-con-c');
            console.log('Earnings -> PS5 Consoles');
            more_data();
        }
        else {
            console.log('Select an option.');
        }
    }

    function more_data() {
        let wrapper = document.createElement('div');
        let data_na = document.createElement('p');
        let data_eu = document.createElement('p');
        let data_jp = document.createElement('p');
        let data_wr = document.createElement('p');
        let message = document.createElement('p');
        data_na.textContent = 'North America 7.42M (Units sold)';
        data_eu.textContent = 'Europe 7.21M (Units sold)';
        data_jp.textContent = 'Japan 1.41M (Units sold)';
        data_wr.textContent = 'Rest of the World 2.78M (Units sold)';
        message.textContent = 'Consoles sold over the World.';
        document.body.children[1].children[0].children[0].children[2].appendChild(wrapper).setAttribute('class','wrapper');
        document.body.children[1].children[0].children[0].children[2].children[2].appendChild(data_na).setAttribute('class','na');
        document.body.children[1].children[0].children[0].children[2].children[2].appendChild(data_eu).setAttribute('class','eu');
        document.body.children[1].children[0].children[0].children[2].children[2].appendChild(data_jp).setAttribute('class','jp');
        document.body.children[1].children[0].children[0].children[2].children[2].appendChild(data_wr).setAttribute('class','wr');
        document.body.children[1].children[0].children[0].children[2].children[2
            ].appendChild(message).setAttribute('class','ms');
    }

    function clear_results() {
        document.getElementById('type_in').addEventListener('click', function(){
            document.querySelector('.output_text').innerHTML = "";
        });
    }
    clear_results();

    // 1044 & 944
    // 17300000