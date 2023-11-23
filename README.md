# Cornell Notes on Documentation and Tutorials

## Architecture/Table of Contents

1. [Scrum_and_Agile](#ScrumAndAgile)

1. [Xcode](#Xcode)

2. [Swift](#Swift)

3. [SwiftUI](#SwiftUI)

  
---

## Scrum And Agile Topics

1. [Product Backlog: Grooming the Product Backlog](#grooming_product_backlog)

<a name="types--grooming_product_backlog"></a><a name="SA1. product backlog: grooming the product backlog"></a>

-[SA1.](#types--grooming_product_backlog) ***Refining the Product Backlog***: Making this into workable steps by answering "<em>Are the Issues and Stories still relevant? Has a feature replaced them? Did a function or feature make it obsolete?</em>"

-- Do this via "Definition of Ready: Checklist" for each Story in the Backlog
[] Actionable, no dependencies are needed
[] Refined, understand what needs to be done
[] Valuable, the fix/feature brings value to the User
[] Small, the Step/Story can fit into a single sprint (if necessary, break into smaller pieces)
[] Testable, with [context knowledge](#link), perform the unit and acceptance testing
TODO: add the #link

1. [User Story: Drafting Tips](@user_story_drafting_tips)

<a name="types--user_story_drafting-tips"></a><a name="SA2. user story: drafting tips"></a>

-[SA2](#types--user_story_drafting_tips) ***How to Create User Stories***: the point of a user story is NOT to tell the development team how to do stuff. That's not agile, that's waterfall.

Convey the issue so the developer can understand how the user would interact, then the <strong>developer</strong> comes up with the solution. Like pseudo-coding it.

<em>"As a [type of user/description], I want to [perform an action/(this defines the acceptance criteria too)] so that [a benefit of the said feature/fix]!" </em>

Good example:

As a site member, I want to view the profiles of other members so that I can find others I might want to connect with.

Bad example:

As a site member, I want to view profiles by clicking a button in the top left corner which is 20px*20px and centered in the middle, written in X language. This should then add that user to my account linked by my hash Id.


FULL TICKET EXAMPLE: 
User story: As a site member, I want to view the profiles of other members so that I can find others I might want to connect with.

<u>Acceptance criteria</u>:

* The user can view other users profiles

* The user can add other users

* The user can view who they've added

<a>Resources:</u> Project plan link Design link


1. [User Story: examples](@user_story_examples)

<a name="types--user_story_examples"></a><a name="SA3. user story: examples"></a>

-[SA3](#types--user_story_examples) ***HUser Story Examples***: 

<strong>1. User story for transferring money</strong>
Sending money through mobile apps can speed up the transcation process. Unlike checks, digital money transfers can be instantly processed, making it easier to manage a user's finances, and not cause delays, especially with large transactions.

#### Transfer Money User Story
User Story  As a <strong>regular fintech app user</strong>, I want to <strong>transfer money</strong> from my bank account to another account using the Mobile App, so I can <strong>easily manage my finances and pay my bills on time.</strong>

Acceptance Criteria: 
    * User can login to the mobile app
    * User can enter the desired amount to transfer
    * Desired amount is validated: within the user's current balance
    * Receiver's account information is authenticated prior to transfer
    * Both accounts are updated concurrently after validation
    * Email and in-app confirmation of transactions are sent to the user and the receive

<strong>2. User story for withdrawing money</strong>
Another innovation fintech offers is the convinences of withdrawing money in the Web. Money can be withdrawn online if users have ATM cash cards that accept cash via quick response (QR) codes.


#### User Story for Withdrawing Cash
User Story  As a <strong>regular fintech app user</strong>, I want to <strong>withdraw money</strong> from my bank account using the Mobile App, so I can <strong>easily draw out cash even when I don't have my card.</strong>

Acceptance Criteria: 
    * User can login to the mobile app
    * User can enter the desired amount to withdraw
    * Desired amount is validated: within the user's current balance
    * Account(s) updated concurrently after validation
    * Email and in-app confirmation of transactions are sent to the user

**[⬆ back to top](#table-of-contents)**
---
---

### Xcode Topics

1. [Essentials](#essentials)

---
---
#### Essentials

<a name="types--configure"></a><a name="1.a. configure a target for your app"></a>

- [1.a.](#types--configure) ***Configuring***: Xcode determines how to build apps and other products from your project's target information.

```swift

const foo = 1;

```

<a name="types--target"></a><a name="1.b. target (parts and pieces)"></a>

- [1.b.](#types--target) ***Target***: the `target` contains the tasks required to create executable plus the `settings` to build it, by default.
<ul type='disc'>the templates have default targets which Xcode configures using the information you provide (you can change and [configure a new target](#link) for your Project, as ncessary) 



<a name="types--buildScheme"></a><a name="1.c. build scheme"></a>

- [1.c.](#types--buildScheme) ***Build Scheme***: A collection of settings that specify which `targets` to build, which `configuration` to build, and the executable environment for running the product
    * Xcode creates schemes automaticallly, and display it in the toolbar. Click it if youd need to choose a new one, and a pop-up menu list will show
    * You may create your own, to pass additional launch arguments to your app, for example



<a name="types--runBuildApp"></a><a name="1.d. building an app (or anything else)"></a>

- [1.d.](#types--runBuildApp) ***Run and Build An App***: Once you select a `scheme`, also select the `target`. 
- Then select the real or simulated devices, the 'available destination' in documentation (usually a pop-out from the scheme listed in the toolbar).

    * Before you ship, use a real device --> Simulators work and do a lot, but an actual device is for real condition-testing



<a name="types--buildApp"></a><a name="1.e. build"></a>

- [1.e.](#types--buildApp) ***Build***: Design and code out your app. Then, choose `Product > Run` or Cmd + R.
- Xcode attaches your schemes, builds them in the proper sequence



<a name="types--debugApp"></a><a name="1.f. debug"></a>

-[1.f.](#types--debug) ***Debug***: Enable the process like so `Debug > Debug Executable`, and the debug terminal will appear at the bottom of the console. 



<a name="types--buildWithoutRunning"></a><a name="1.g. build without running simulator or device"></a>

- [1.g.](#types--buildWithoutRunning) ***Build Without Running***: To build a scheme <em>without</em> running the app, `Cmd + B` or `Product > Build`



<a name="types--issueNavigator"></a><a name="1.h. issue navigator"></a>

- [1.h.](#types---issueNavigator) ***Issue Navigator***: If Xcode encounters an error during build, it reports it in the issue navigator and stops. The issue navigator is an icon/option at the top of the editor column. You can enable or disable stopping from the `General` tab in `Preferences > Continue building after errors`. Or stop an in-progress build: `Product > Stop`. 



<a name="types--workspaces"></a><a name="1.i. workspaces"></a>

- [1.h.](#types--workspaces) ***Workspaces***: A workspace is a container for related projects
- Use a workspace to organize multiple projects that have explicit or implicit dependencies with each ohter
- `File > New > Workspace` Then, in the Project Navigator, click on empty space to "Add files to `workspace`name
- In that Finder view, select the .xcodeproj you need, click `Add` the project to the workspace
- * Xcode will automatically build the dependences.



<a name="types--crossProjectReferences"></a><a name="1.j. cross-project references"></a>

- [1.j.](#types--crossProjectReferences) ***Cross-Project References***: Since a workspace project can't refer to targets, files or products <em>in another project</em>, you must build cross-project references.
- Open Project Navigator in your Xcode project
- Click the Add button (+) at the <em>bottom</em> of the Project Navigator
- Choose "`Add Files to `project"
- Select another .xcodeproj to link to
- Click `Add`

- After you add the cross-project referencem you can refer to outside elements in your project -- from dependencies, to copying files and Link Binaries with Library build phases


**[⬆ back to top](#table-of-contents)**


---
---
### SwiftUI Topics

1. [Initial](#initial)

---
---
## Initial

<a name="types--basicContentView"></a><a name="2.a. basic ContentView"></a>

- [2.a.](#types--basicContentView) ***Snippet of the Basic ContentView***: 

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack{
            Image(systemName:"mic")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("Hello, world!")
            
        }
            .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

```

