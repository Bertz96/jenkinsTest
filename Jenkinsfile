pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git branch: 'dev', url: 'https://github.com/Bertz96/jenkinsTest.git'
                // Aquí se realiza la compilación del proyecto
                sh 'npm install' // Instala las dependencias del proyecto
                echo 'Build successful'
            }
        }

        stage('Test') {
            steps {
                // Aquí se ejecutan los casos de prueba
                sh 'npm test' // Ejecuta los casos de prueba
                echo 'Tests executed'

                // Verifica el resultado de los casos de prueba
                script {
                    def testResult = sh(returnStatus: true, script: 'npm run test:verify')
                    if (testResult == 0) {
                        echo 'Tests passed'

                        // Realiza el merge a la rama principal
                        git merge 'main'
                        echo 'Merge to main branch successful'
                    } else {
                        error 'Tests failed. Aborting deployment.'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Despliegue al repositorio
                bat 'git add .'
                bat 'git commit -m "Todos los test pasaron, se hizo un merge con la rama principal"'
                bat 'git push -u origin main'
                echo 'Deployment successful'
            }
        }
    }
}
