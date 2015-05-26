This is a boilerplate to be used for nodejs-assignments. The virtual machine (Ubuntu 32bit) 
will have the following default installed (if using master branch):
* node.js
* npm
* git 

In branch "with_mongodb" following is also included:
* mongodb
* mongoose
* express

Clone down the specific branch with:
`git clone -b with_mongodb --single-branch https://github.com/thajo/node-vagrant-boilerplate.git vagrant`

## Install
Make sure you have the following installed on your system:
* Virtual Box [https://www.virtualbox.org/](https://www.virtualbox.org/)
* Vagrant [https://www.vagrantup.com/](https://www.vagrantup.com/)

Now, do:

1. Clone this repro to the location you want the project to live. 

2. Change directory to `cd node-vagrant-boilerplate`. 

3. Start the virtual machine using `vagrant up` 

4. SSH into the machine using the shellscript with `sh vagrant-ssh-node.sh`. This will start a ssh session that overcome the 
problems with node, vagrant and 0.0.0.0 vs. 127.0.0.1 [https://groups.google.com/forum/#!topic/vagrant-up/RzPooJ0dp6Q]

5. Change directory to `cd /vagrant/app`

6. Install all dependencies with `npm install`

7.  Don´t forget to update the github url to your own repo: `git remote set-url origin  git@github.com:user/reponame.git`


## Daily workflow
1. Start out by `vagrant up` your machine and ssh into it (`sh vagrant-ssh-node.sh`). Change directory to `cd /vagrant/app`.

2. Start teh server and watching for changes in the app-directory 
by `npm run gulp:default`. 
Now you have your application (app.js) listning on the adress: `http://localhost:8080`, 
try it out in the browser of your choise.

3. Fire up WebStorm
and open the files in the `app`-folder start editing your application. 
If you make a change in the application the server application will restart.

4. When you are done simply `ctrl+c` to abort the watch, `exit` to  exit the ssh-session and do a `vagrant halt` to stop the machine or `vagrant suspend` to only suspend it.

## Debugging
1. On the server run `npm run gulp:debug`. The node-application will run in debug mode at port 5858
2. Make sure you have configured the WebStorm "Run --> Edit configuration --> Add new configuration --> Node.js remote debug
3. Run the debugger and it will now debug on the vagrant server

## Vagrant tips
If you running mac or linux the vagrant file is updated with nfs-support. That could mean you have to write your root password. Check the vagrant documantion for tips: https://docs.vagrantup.com/v2/synced-folders/nfs.html
