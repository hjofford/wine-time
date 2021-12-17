-- Create DB
createdb wine-time

-- Create Tables
CREATE TABLE streams (
    id SERIAL PRIMARY KEY,
    streamTitle TEXT
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT,
    content TEXT,
    stream INTEGER    
);

-- Insert main streams
INSERT INTO streams (streamTitle) VALUES ('To do');
INSERT INTO streams (streamTitle) VALUES ('In progress');
INSERT INTO streams (streamTitle) VALUES ('Review');
INSERT INTO streams (streamTitle) VALUES ('Done');

-- Insert dummy tasks
INSERT INTO tasks (title, content, stream) VALUES ('Project Plan', 'Create trello and figma board to draft design and features', 1);
INSERT INTO tasks (title, content, stream) VALUES ('Create React App', 'Create base app structure and components folder', 2);
INSERT INTO tasks (title, content, stream) VALUES ('Create Components', '3 components for Title, Streams, Tasks and a Board container. The board is where the Streams(draggable) will sit. Tasks(draggable between Streams) will sit within Streams', 2);
INSERT INTO tasks (title, content, stream) VALUES ('Create Node server and PSQL DB', 'Create the server side', 2);
INSERT INTO tasks (title, content, stream) VALUES ('Create GitHub and Heroku repos', 'Save project work and git add., git commit, git push to repo. After Heroku is connected, connect GitHub repo and set up auto-push/build', 3);
INSERT INTO tasks (title, content, stream) VALUES ('Push and test', 'Test in live environment and fix bugs', 3);
INSERT INTO tasks (title, content, stream) VALUES ('Readme.md tidy-up', 'Fix final Readme file', 3);
INSERT INTO tasks (title, content, stream) VALUES ('Publish ''Wine Time'' App', 'App Published and Live. Time for a Wine (or 10!)', 4);
