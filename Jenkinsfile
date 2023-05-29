pipeline {
    agent any

    stages {
    
        stage('Build') {
            steps {
                git branch: 'main', url: 'https://github.com/Bertz96/jenkinsTest.git'
                bat 'npm install'
                echo 'dependencias instaladas'
            }
        }
    
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
   
        stage('Deploy') {
            steps {
                bat 'mkdir carpetaDeJenkins'
                bat 'cd carpetaDeJenkins'
                bat 'new-item hola.txt'
                bat 'echo Este es el texto de ejemplo. > hola.txt'
                bat 'git add .'
                bat 'git commit -m "Mensaje del commit"'
                bat 'git push -u origin main'
                
            }
        }
    }
    
    post{
        
        failure{
        
                echo 'Algo no salio segun lo esperado'    
        }
        
    }
}
