import { Component, OnInit } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { ProgressBarService } from "../../services";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {
  progressBarMode: string;
  constructor(
    private router: Router,
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      console.log('mode', mode)
      this.progressBarMode = mode;
    });
  }

  ngOnInit() {}
}
