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
                echo 'todos los test fueron ejecutados'
            }
        }
   
        stage('Deploy') {
            steps {
               
                bat 'echo Este es el texto de ejemplo. > hola.txt'
                bat 'git add .'
                bat 'git commit -m "Mensaje del commit"'
                bat 'git push -u origin main'
                
            }
        }
    }
    
    post{
        
        failure{
                echo 'Pipeline completado'
                echo '--------------------'
                echo 'Proyecto desplegado!'    
        }
        
    }
}
