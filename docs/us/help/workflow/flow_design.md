---
title: How to design a flow
---

Admins need to design the flow after having finished form designs.
In Steedos Workflow, a node represents a step , and all nodes are connected with straight lines. A node can concatenate one or more nodes according to following approval process. The flowing nodes can be decided by assigned by approver or by conditions automatically.

#### Flow design

We set “Daily Reimbursement” as an example to demonstrate the flow design process. Detailed steps are listed below.
- Login in Steedos, and then click “Workflow Designer” in “Settings”.
- Select “No Category” in pop-up interface and then click “Daily Reimbursement”.
- In the workflow interface, “Flow Info”, “Draw”, “Properties” are displayed in the panel at the right side.
  - Flow name and flow description can be modified in “Flow Info”.
  - Click “Draw” to add different nodes, including “Approve Request”, “CounterSign”, “Provide Input”, “Condition”. Here is a brief introduction for different nodes.
  
![](/assets/us/workflow/17.png)

    - **Approve Request**: Approvers must select “Approve” or “Reject”.
    - **CounterSign**: In the node, several users can approve applications. Then applications flow to next step automatically according to system conditions.
    - **Provide Input**：Users can input comments or submit requests immediately, but can not select “Approve” or “Reject”.
- Select one node in “Draw” and move it to the left panel of the page. 
- And then place the mouse cursor over this node. Next，click “+” icon to add lines to connect nodes. 
- Of course，you can click “-” to delete the lines. 
- Click the specific node and then “Flow Info”,  “Draw”， “Properties” and “Permissions” are displayed in the panel.
  - **Properties**: Admins can modify “Step Name”, “Assign to” and “Deadline for the step” in properties. For more details, please refer to “[Approver settings](flow_step_user.md)”.
  - **Permissions**: Except for the start step, all fields are read-only by default. Admins can tick editable fields in the step according to actual situations.
- Turn on the switch in “Workflow List” to run the flow.

#### Notice：
Requests submitted before the modification of form and flow design will run according to previous settings. The requests submitted after modifications will flow in new steps.

