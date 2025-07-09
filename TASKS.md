# Task Manager Development Tasks

This file lists development tasks to ensure the application supports core features and functionality.

## Project and Task Editing
- [x] Allow editing of project and task details (description, deadline, star/favorite flag, focus toggle).
- [ ] Verify changes persist across all views (dashboard, list, card, kanban, etc.).

## Project Detail Navigation
- [x] Ensure every page that displays a project allows users to click through to view full project details.

## Kanban/List/Card Views
- [ ] Support editing projects directly within each view.
- [ ] Allow tasks to be added from these views.
- [ ] Enable drag-and-drop reordering and moving projects/tasks.

## Deadline Management
- [x] Changing a project deadline should automatically update all associated tasks to the same deadline.
- [x] Users can override individual task deadlines after the update.

## Notes
- [ ] Display a sticky note in the center of the screen with drag-and-drop functionality.
- [ ] Provide ability to add, edit, or remove notes from a list.
- [ ] Support adding/removing floating notes.
- [ ] Allow changing the color of each note.
- [ ] Notes can be linked to a project or standalone.
- [ ] Provide an easy-to-see blank block in the top-right corner where floating notes can be placed.
- [ ] When a note is linked to a project, clicking it should navigate to that project's details.

## Persistence & Data Storage
- [x] Persist projects, tasks and notes to disk as JSON files.
- [x] Load existing data on start from the application's userData directory.
- [x] Save the positions and colors of floating notes.
- [x] Replace the hard-coded `basePath` with `app.getPath('userData')` to work cross-platform.

## Focus Mode and Navigation
- [x] Implement a menu action to toggle focus mode in `renderer.html`.
- [x] When focus mode is enabled, hide all projects except the selected focus project.
- [x] Provide a visible indicator that focus mode is active.

## Search & Export
- [x] Add search functionality for tasks similar to project and note search.
- [x] Implement the `exportAllData` method to write all user data to a chosen file.
- [x] Remove unused HTML files (`renderer-backup.html` and `task-manager-phase4.html`) once all features are merged.
