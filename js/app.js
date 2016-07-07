var Hammer = require('hammerjs');

var hammer_area = document.getElementById("hammer_time");
var hammer_time = new Hammer(hammer_area);

var data = [
    {
        image: 'http://free.bridal-shower-themes.com/img/c/u/cute-black-baby-pug_1.jpg',
        name: 'bob',
        gender: 'hemaphrodite',
        availability: 'breakfast/lunch',
        department: 'asshat department'
    },
    {
        image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ICGPGkNuB3w%2FUmmPC4pjVGI%2FAAAAAAAAAjE%2Fmqc7-Q-z-KA%2Fs1600%2FOne%2BSad%2BPug%2BIn%2B21%2BAdorable%2BHats%2B(7).jpg&f=1',
        name: 'john',
        gender: 'male',
        availability: 'lunch',
        department: 'dick face department'
    },
    {
        image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_m4wa3k8i1u1rpwcoeo1_500.jpg&f=1',
        name: 'hannah',
        gender: 'femail',
        availability: 'lunch',
        department: 'fucktard department'
    },
    {
        image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-5Ze9TtFA8zo%2FUOQ5djAS6mI%2FAAAAAAAAPi4%2F87Uu3T4KRNQ%2Fs1600%2Fmiley.jpg&f=1',
        name: 'katie',
        gender: 'femail',
        availability: 'breakfast',
        department: 'nice ass department'
    },

];

document.getElementById("no").addEventListener("click", insertData);
document.getElementById("yes").addEventListener("click", insertData);

function insertData() {
    var info;

    if (data.length == 0) {
        return;
    }
    else {
        info = data.pop();
    }

    document.getElementById("image").src = info['image'];

    var name = document.getElementById('name');
    name.innerHTML = info['name'];

    var gender = document.getElementById('gender');
    gender.innerHTML = info['gender'];

    var availability = document.getElementById('availability');
    availability.innerHTML = info['availability'];

    var department = document.getElementById('department');
    department.innerHTML = info['department'];
}

// detect swipe and call to a function
hammer_time.on('swiperight swipeleft', function(e) {
    e.preventDefault();
    insertData();
});


for (var i = 0; i < data.length; i++) {
    var keys = Object.keys(data[i]);
    console.log('\n');

    for (var j = 0; j < keys.length; j++) {
        console.log(keys[j] + ": " +  data[i][keys[j]]);
    }
}


insertData();















