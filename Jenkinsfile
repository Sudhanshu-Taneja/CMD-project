pipeline {
 
  agent any
    
    environment {
        registryName= "cmdproject"
        registryUrl = 'cmdproject.azurecr.io'
        registryCredential = 'ACR'
        dockerImage = ''
    }
    
    tools{
        nodejs "NodeJS"
    }

   stages {
        stage('GitHub'){              
                steps{
                    git branch: 'main', url: 'https://github.com/Sudhanshu-Taneja/cmd-project.git'
            }
        }
        stage('docker-image'){
               steps{
                    echo "Building docker image"
                    script{
                        dockerImage = docker.build registryName
                        dockerImage=docker.build registry + ":$BUILD_NUMBER"
                        sh 'docker build -t cmd_fe .'
                    }
                }
        }
        stage('Upload Image to ACR') {
        steps{   
            script {
                docker.withRegistry( "http://${registryUrl}", registryCredential ) {
                dockerImage.push()
                }
            }
            }
        }
        stage('SonarQube'){
          steps{
            echo "SonarQube"
             sh '''
                npm install -g sonar-scanner \
                -Dsonar.projectKey=CMD \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://20.150.147.249:9000 \
                -Dsonar.login=sqp_ff1ed4ef652f92391039d36f3fc5d57f034b0139
                '''
          }
        }
    }
}