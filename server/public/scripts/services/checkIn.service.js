myApp.service('CheckInService', ['$http', '$location', '$mdDialog', function ($http, $location, $mdDialog) {
    console.log('CheckInService Loaded');
    let self = this;

    self.riders = {
        list: [
            {
                member_id: 123,
                member_name: 'Patrick',
                checked_in: false
            },
            {
                member_id: 152,
                member_name: 'Darren',
                checked_in: true
            },
            {
                member_id: 124,
                member_name: 'Lukas',
                checked_in: false
            },
        ]
    }


}]);