import { Component, OnInit } from '@angular/core';

import { AddProject } from '../../shared/models/add-project.model';
import { ProjectService, UtilityService } from '../../shared/services';

@Component({
    selector: 'cbs-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss']
})

export class AddProjectComponent implements OnInit {
    name: string;

    constructor(
        private projectService: ProjectService,
        private utilityService: UtilityService
    ) { }

    ngOnInit() {
    }

    async addProject() {
        const projectId = this.utilityService.createGuid();

        let project = new AddProject();
        project.name = this.name;
        project.id = projectId;

        await this.projectService.saveProject(project);
    }
}
