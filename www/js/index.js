/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        
        // Event Listeners for Storage
        document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
        document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
        document.getElementById("removeProjectFromLocalStorage").addEventListener("click",removeProjectFromLocalStorage);
        document.getElementById("getLocalStorageByKey").addEventListener("click", getLocalStorageByKey);
        
        //zsdszd
        // Get Local Storage
        var localStorage = window.localStorage;
        
    },


};

app.initialize();

// Set local Storage Data
function setLocalStorage() {
    
       localStorage.setItem("Name", "John");
       localStorage.setItem("Job", "Developer");
       localStorage.setItem("Project", "Cordova Project");
    
}

// Show local Storage data by Alert
function showLocalStorage() {
    
       alert(localStorage.getItem("Name"));
       alert(localStorage.getItem("Job"));
    
    if (localStorage.getItem("Project") == null) {
        
        alert("No Project, please insert project");
        
    } else {
              
       alert(localStorage.getItem("Project"));
    
}
}

// Delete Project Item
function removeProjectFromLocalStorage() {
    
       localStorage.removeItem("Project");
}

// Get Local Storage By Key
function getLocalStorageByKey() {
    
       alert(localStorage.key(0));
}


