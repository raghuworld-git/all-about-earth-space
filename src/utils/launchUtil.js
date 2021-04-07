import { getFullFormattedDateTime } from "./dateUtil";

export const getColorByLaunchStatus = (launchStatusAbbr) => {

    switch (launchStatusAbbr) {
        case 'TBD':
        case 'TBC':
        case 'Hold':
            return ['info', '#33b5e5']
        case 'Go':
        case 'Success':
            return ['success', 'green']
        case 'Failure':
        case 'Partial Failure':
            return ['danger', 'red'];
        case 'In Flight':
            return ['orange', 'orange']
        default:
            return ['default', 'white'];
    }

}



export const getFormattedTop5UpcomingList = (data = []) => {

    let response = { nextlaunch: [], upcomingLaunch: [] };
    if (!data) return response;
    let dataArray = data.map((item) => {
        const { name, net, id, slug, status, launch_service_provider, pad, image } = item;
        const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(net);
        const fromattedNet = `${month} ${day} ${year}, ${hour}:${minutes}:${seconds}`;
        const statusColors = getColorByLaunchStatus(status.abbrev);
        return { name, image, id, slug, location: pad.location?.name, agency: launch_service_provider.name, statusFull: `${status.name} (${status.abbrev})`, statusFullColor: statusColors[0], shortStatus: status.abbrev, shortStatusColor: statusColors[1], fromattedNet, originalNet: net }
    })

    response.nextlaunch = dataArray.splice(0, 1);
    response.upcomingLaunch = dataArray.splice(0);

    return response;

}

export const getFormattedLaunchDetails = (data = []) => {

    let response = { launchInfo: [] };
    if (!data) return response;
    let dataArray = data.map((item) => {
        const { name, net, id, slug, status, launch_service_provider, pad, image, rocket } = item;
        const { year, month, day, hour, minutes, seconds } = getFullFormattedDateTime(net);
        const fromattedNet = `${month} ${day} ${year}, ${hour}:${minutes}:${seconds}`;
        const statusColors = getColorByLaunchStatus(status.abbrev);
        return { name, image, id, slug, location: pad.location?.name, agency: launch_service_provider.name, statusFull: `${status.name} (${status.abbrev})`, statusFullColor: statusColors[0], fromattedNet, originalNet: net, launchCrew: getFormattedCrews(rocket?.spacecraft_stage), rocketConfig: rocket?.configuration }
    })

    response.launchInfo = dataArray;

    return response;

}

const getFormattedCrews = (crewInfo) => {
    if (crewInfo === null) return crewInfo;
    const crewInfoArray = [];

    if (crewInfo?.landing_crew) {
        crewInfo.landing_crew.forEach(element => {
            if (crewInfoArray.find(x => x.astronaut.id === element.astronaut.id) === undefined) {
                crewInfoArray.push(element);
            }
        });
    }

    if (crewInfo?.launch_crew) {
        crewInfo.launch_crew.forEach(element => {
            if (crewInfoArray.find(x => x.astronaut.id === element.astronaut.id) === undefined) {
                crewInfoArray.push(element);
            }
        });
    }

    return crewInfoArray.length > 0 ? crewInfoArray : null;
}

export const getYoutubeEmbedUrlByWatchURL = (watchURL = '') => {
    let split = watchURL.split("=");
    return `https://www.youtube.com/embed/${split[1]}`;
}