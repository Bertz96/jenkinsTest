pipeline {
    agent any

    tools 
        {
          nodejs "node"
        }

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
                echo 'Deploy App'
            }
        }
    }
    
    post{
        
        failure{
        
                echo 'Algo no salio segun lo esperado'    
        }
        
    }
}
