<script>
    export let data = [];
    function getContributorName(contributor) {
        const { contributorFirstName, contributorLastName } = contributor;
        const contributorName =
            contributorFirstName === ''
                ? contributorLastName
                : `${contributorFirstName} ${contributorLastName}`;
        return contributorName;
    }
</script>

<div class="contributors">
    <table class="contributors table">
        <thead class="sticky-top">
            <tr>
                <th scope="col">Contributor</th>
                <th scope="col">Location</th>
                <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            {#each data as contributor, i}
                <tr class="contributor">
                    <td class="contributor-name">
                        {getContributorName(contributor)}
                    </td>
                    <td class="contributor-location">
                        {contributor.contributorCity}, {contributor.contributorState}
                    </td>
                    <td class="contributor-amount">
                        ${contributor.amount.toLocaleString('en-US')}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
</style>
