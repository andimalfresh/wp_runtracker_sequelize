This repo is for the sequelize version for the Backend of 
the wp_runtracker app.


<!-- OUTLINE OF ERD -->

<!-- USER  -->
user_name: STRING
user_id: INTEGER
password: STRING
home_resort: fk:resortID
access_level: INTEGER

<!-- RESORT  -->
resort_name: STRING 
resort_id: INTEGER
open_status: BOOLEAN
closing_date: STRING 
snowfall: INTEGER
territories: fk:territoryID
lifts: fk:liftsID
runs: fk:runsID

<!-- TERRITORY: -->
territory_name: STRING
territory_id: INTEGER
resort: fk resort:ID 
open_status: BOOLEAN
lifts_running: filter TRUE
lifts: fk:territoryID 
runs: fk:territoryID: fk :liftsID

<!-- LIFTS -->
lift_name: STRING 
lift_id: INTEGER
ride_time: INTEGER
open_status: BOOLEAN
territory: fk: territory_id
runs: fk: runs_id (Many to Many)

<!-- RUNS:  -->
run_name: STRING 
run_id: INTEGER
groom_status: INTEGER
snow_status: INTEGER
open_status: BOOLEAN
territory: fk: territory_id
lift: fk: lift_id (1 to Many)
