### Flow Positions
The administrator needs to set "Flow Positions" and "Positions Users" when designing the approval process. Because the option in the "Role Name" is the "Flow Positions" set by the administrator when the "handler" type of a processing step of the approval process is the "Role of initiator"; <br/>
For example, when "Department Manager", "Chief" is created in "Flow Positions", the "Role manager" option in the approval process includes "Department Manager", "Chief".
 ![](static/assets/us/workflow/positions1.png)
 
 ![](static/assets/us/workflow/positions2.png)
 Note: For the design of the approval process, please refer to the "flow_design" help documentation.
 
#### Detailed steps for Flow Positions:
- In the setup interface, click "workflow" and click "Flow Positions".
- Click the "Create" button in the upper right corner to pop up the pop-up box for the new job. After filling in the name of the new job in "Position Name", click the "Create" button to complete the approval.
- In the post list page, click on the post name on the right side of the "pen shape" button, "×" button, you can modify the job, delete.
 
### Positions Users
"Positions Users" is similar to the position of an employee in a real job. Assuming "Position" is "department manager", "Positions Users" correspond to the department manager of the specific department, such as the "department manager" of the personnel department, the "department manager of the finance department", the "department manager" of the technical department.

![](static/assets/us/workflow/positions3.png)
- in the figure you can see that each "Department Manager" position, the corresponding "jurisdiction" is the specific sector (such as: Technology, Finance, Ministry of Personnel), and "Positions Users" is appointed department manager The
- Note: The appointed department manager can also be multiplier.
 
#### Detailed steps for Positions Users:
- set the interface, click on "workflow", click "Positions Users", then click the new, will pop up "Positions Users" pop-up box.
 ![](static/assets/us/workflow/positions4.png)
- Select an established approval position, such as "Department Manager", specify the post member (which can be multiple people), jurisdiction.
- Click the "Create" button to complete.
- In the post list page, click on the post name on the right side of the "pen shape" button, "×" button, you can edit the job, modify.
 
#### Based on "Flow Positions" to define the advantages of flow:
- Reduced the impact of staffing adjustments on process settings:
 If the department manager to replace, assuming that 10 flow are defined a step for this person to deal with, then you need to modify the 10 flow. And if the steps of the 10 flow is the approval of the post "department manager" to deal with, then there is no need to modify the flow of these 10 processes, only in the approval of the post set, the department's department manager for others.

### Note

- **A user can correspond to multiple Flow Positions**, for example, the same person, both the office manager and the company's office director.
- **A Flow Positions can also have multiple users**, (corresponding to the same or different scope of approval for departments). For example, "Department Manager" of the post, the Ministry of Finance can be a member of the staff, the staff of the Ministry of Personnel is 2, so that the approval of the Ministry of Personnel process, sometimes need to choose one of the two department managers.
