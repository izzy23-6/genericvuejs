<template>
    
        <section id="nav">
        <div class="wrapper">
            <!-- Sidebar -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>MedProcure</h3>
                </div>
                <ul class="list-group">
                    <li @click="navigateToHome" class="active btn btn-default" >Home</li>
                    <li @click="selectedComponent = 'app-residents'" class="btn btn-default">Residents</li>
                    <li @click="selectedComponent = 'app-quickcharges'" class="btn btn-default">Quick Charges</li>
                    <li @click="selectedComponent = 'app-supplies'" class="btn btn-default">Supplies</li>
                </ul>

            </nav>
            <!-- Page Content -->
            <div id="content">
                <component :is="selectedComponent"></component>
            </div>
            
        </div>
        </section>
        
        
        
        
        
        
        
    
</template>

<script src='../JS/Nav.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../CSS/Nav.css' scoped></style>