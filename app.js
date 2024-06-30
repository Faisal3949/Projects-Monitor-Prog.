// var app = angular.module('ProjectsApp', []);

//     app.controller('ProjectsAppCtrl', ['$scope', function($scope) {
//         $scope.showCard = true;
//         $scope.projects = []; 

//         $scope.closeCard = function(index) {
//             $scope.projects.splice(index, 1);
//             // $scope.showCard = false;
//         };

//         $scope.showImageList = false;
//         $scope.selectedImage = "";

//         $scope.toggleImageList = function() {
//             $scope.projects[index].
//             showImageList = !$scope.projects[index].showImageList;
//         };

//         $scope.selectImage = function(imageSrc, index) {
//             $scope.projects[index].selectedImage = imageSrc;
//             $scope.projects[index].showImageList = false;
//         };

//         $scope.addProject = function(){
//             var newProject = {
//                 showCard: true,
//                 selectedImage: "",
//                 showImageList: false
//             };
//             $scope.projects.push(newProject);
//         };
//     }]);



    var app = angular.module('ProjectsApp', []);

    app.controller('ProjectsAppCtrl', ['$scope', function($scope) {
        $scope.showCard = true;
        $scope.projects = []; // Array to hold project data

        $scope.closeCard = function(index) {
            $scope.projects.splice(index, 1);
        };  

        $scope.showImageList = false;
        $scope.selectedImage = "";

        $scope.toggleImageList = function(index) {
            $scope.projects[index].showImageList = !$scope.projects[index].showImageList;
        };

        $scope.selectImage = function(imageSrc, index) {
            $scope.projects[index].selectedImage = imageSrc;
            $scope.projects[index].showImageList = false;
        };
        

        // static card

        $scope.toggleImageList1 = function() {
            $scope.showImageList = !$scope.showImageList;
        };

        $scope.selectImage1 = function(imageSrc) {
            $scope.selectedImage = imageSrc;
            $scope.showImageList = false;
        };


        // Add new project card 

        $scope.addProject = function() {
            var newProject = {
                showCard: true,
                selectedImage: "",
                showImageList: false
            };
            $scope.projects.push(newProject);
        };


        // Comment box

        $scope.comments = [];

        $scope.addComment = function() {
            if ($scope.newComment) {
                $scope.comments.push($scope.newComment);
                $scope.newComment = ''; // Clear input
            } else {
                alert("Please enter a comment.");
            }
        };

         // Set the target date (YYYY-MM-DD format)
         const targetDate = new Date("2024-06-31").getTime();

         // Update the countdown every second
         setInterval(() => {
             // Get the current date and time
             const now = new Date().getTime();
 
             // Calculate the time remaining
             const timeRemaining = targetDate - now;
 
             // Calculate days, hours, minutes, and seconds
             $scope.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
             $scope.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             $scope.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
             $scope.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
 
             // Apply changes
             $scope.$apply();
 
             // If the countdown is finished, clearInterval
             if (timeRemaining < 0) {
                 clearInterval(countdownInterval);
                 $scope.days = '0';
                 $scope.hours = '0';
                 $scope.minutes = '0';
                 $scope.seconds = '0';
             }
         }, 1000);
    }]);


    

        // $scope.toggleImageList = function() {
        //     $scope.showImageList = !$scope.showImageList;
        // };

        // $scope.selectImage = function(imageSrc) {
        //     $scope.selectedImage = imageSrc;
        //     $scope.showImageList = false;
        // };