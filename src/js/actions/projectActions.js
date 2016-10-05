export function fetchProjects() {
  return{
    type: "FETCH_PROJECTS_FULFILLED",
    payload: [
      {id: 123450987654,
       text: "KindJobs",
       image: "../public/images/KindJobs.png",
       github: "https://github.com/CLR-WDI/KindJobs",
       launch: "https://kindjobs.herokuapp.com/",
       description: "Job portal for social service sector, volunteer welfare organisations, and social enterprises."
      },

      {id: 123450987123,
       text: "Wibni",
       image: "../public/images/Wibni.png",
       github: "https://github.com/RenchChua/project-2b",
       launch: "https://gentle-ravine-40949.herokuapp.com/",
       description: "Spark a change. Get people together. Make the world a better place."
      },

       {id: 98765412345,
        text: "Oflo",
        image: "../public/images/Oflo.png",
        github: "https://github.com/CDESR",
        launch: "https://oflo.herokuapp.com/",
        description: "Motivated by a desire to help instructional team collate questions from the class."
      },

      {id: 56789098765,
       text: "JavaScript Practice",
       image: "../public/images/JSPractice.png",
       github: "https://github.com/RenchChua/javascript-prac1",
       launch: "https://github.com/RenchChua/javascript-prac1",
       description: "Done to help a class mate learn JavaScript control flows and loops. Much scaffolding in this."
      },

      {id: 567890191765,
        text: "Reversi",
        image: "../public/images/Reversi.png",
        github: "https://github.com/RenchChua/project-1b",
        launch: "https://renchchua.github.io/project-1b/",
        description: "It's black, it's white, it's flipping cool! A good project to get comfortable with JavaScript."
      },
      {id: 2345665432,
        text: "TrueOrFalse",
        image: "../public/images/TrueOrFalse.png",
        github: "https://github.com/RenchChua/project-1a",
        launch: "https://renchchua.github.io/project-1a/",
        description: "First full project in WDI. Good practice for styling and basic JavaScript"
      },

    ]
  }
}
